const { 
Telegraf, Markup
 } = require('telegraf')
require('dotenv').config()
const text = require('./const')


const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.replyWithHTML(`${ctx.message.from.first_name ? ctx.message.from.first_name :
'Друг' }!  Нажмите на /action.`, ) )
bot.help((ctx) => ctx.reply(text.commands))

bot.command('action', async (ctx) => {
    try{
        await ctx.replyWithHTML('<b>Выберите действие</b>', Markup.inlineKeyboard(

            [
         
             [Markup.button.callback('Отправить музыку на дистрибуцию', 'btn_1')],
             [Markup.button.callback('Предложить идею', 'btn_2')],
             [Markup.button.callback('Узнать подробнее об услугах', 'btn_3')],
             [Markup.button.callback('Связаться с label менеджером', 'btn_4')],
             [Markup.button.callback('Предложить статью или новость для журнала Curltai insight', 'btn_5')],
         
            ]
             ))
    } catch(e){
        console.error(e);
    }
})


    function addActionBot(name, src, text ){
        

        bot.action(name, async (ctx) =>{
            try{
                await ctx.answerCbQuery()
                if(src !== false){
                    await ctx.replyWithPhoto({
                        source: src
                    })
                }
               await ctx.replyWithHTML(text, {
                    disable_web_page_preview: true
                })
            }catch(e){
                console.error(e)
            }
        })
    }

    bot.action('btn_3', async (ctx) => {
        try{
            await ctx.answerCbQuery()
            await ctx.replyWithHTML('Узнать подробнее об услугах', Markup.inlineKeyboard([
                [     
                    Markup.button.callback('Узнать о дистрибуции музыки', 'btn_31')
                ],
                [
                    Markup.button.callback(' Узнать подробнее об услуге менеджер youtube канала ', 'btn_32') 
                ]
            ]))
        } catch (e) {
            console.error(e)
        }
    }
    )
    bot.on('message', async(ctx, next)=> {
        try{
            await ctx.forwardMessage('-1001563876073');
            next();
        } catch(e) {
            console.error(e)
        }
    })

addActionBot('btn_1', false, text.text1)
addActionBot('btn_2',false, text.text2)
addActionBot('btn_3', false, text.text3,)
addActionBot('btn_4', false, text.text4)
addActionBot('btn_5', false, text.text5)
addActionBot('btn_31', false, text.text6)
addActionBot('btn_32', false, text.text7)

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
