/**
 * 
 * @authors cherish yii2 (cherish@cherish.pw)
 * @date    2020-12-10 16:48:28
 * @version v1.0
 * @description the core js of todolist project
 * 
 * ━━━━━━神兽出没━━━━━━
 * 　　   ┏┓　 ┏┓
 * 　┏━━━━┛┻━━━┛┻━━━┓
 * 　┃              ┃
 * 　┃       ━　    ┃
 * 　┃　  ┳┛ 　┗┳   ┃
 * 　┃              ┃
 * 　┃       ┻　    ┃
 * 　┃              ┃
 * 　┗━━━┓      ┏━━━┛ Code is far away from bugs with the animal protecting.
 *       ┃      ┃     神兽保佑,代码无bug。
 *       ┃      ┃
 *       ┃      ┗━━━┓
 *       ┃      　　┣┓
 *       ┃      　　┏┛
 *       ┗━┓┓┏━━┳┓┏━┛
 *     　  ┃┫┫　┃┫┫
 *     　  ┗┻┛　┗┻┛
 *
 * ━━━━━━感觉萌萌哒━━━━━━
 */

// 请根据考试说明文档中列出的需求进行作答
// 预祝各位顺利通过本次考试，see you next week！
// ...

// const typeInp = document.querySelector('#title')
// const ol = document.querySelector('#todolist')
// const form = document.querySelector('form')
// let type
// form.addEventListener('keydown', function(e) {
//     var code = e.keycode || e.which
//     if (code === 13) {
//         type = typeInp.value
//         e.preventDefault()
//         type = move(type)
//         const li = '<li></li>'
//         const str1 = `
//          <input type="checkbox" />
//          <p onclick="edit(1)">${type}</p>
//          <a href="javascript:remove(1)"></a>
//         `
//         li.html = str1
//         $('#todolist').append(li)

//         console.log(type)
//         add(type)
//         typeInp.value = ''
//     }
// })

// function move(type) {
//     if (type[type.length - 1] === ' ') {
//         var length = type.length
//         var index = 0
//         var str = []
//         for (let i = length - 1; i > 0; i--) {
//             if (type[i] === ' ') {
//                 index++
//             }
//             if (!(type[i] === ' ')) {
//                 i = 0
//             }
//         }
//         for (i = 0; i < type.length - index; i++) {
//             str[i] = type[i]
//         }
//         type = []
//         if (str[0] === ' ') {
//             index = 0
//             for (i = 0; i < str.length; i++) {
//                 if (str[i] === ' ') index++
//                     if (str[i] !== ' ') i = str.length
//             }
//             for (i = index, j = 0; i < str.length; i++, j++) {
//                 type[j] = str[i]
//             }
//         }
//     }
//     return type
// }

$(function() {

    $('#title').on('keydown', function(e) {
        e = e || window.event
        var code = e.keyCode || e.which
        if (code === 13) {
            const value = this.value.trim()
            if (!value) return
            var b = $('ol').children().length
            e.preventDefault()
            var a = $('#title').val()
            const str = `
                    <li>
                        <input type="checkbox" />
                        <p onclick="edit(${b + 1})">${a}</p>
                        <a href="javascript:remove(${b + 1})">-</a>
                    </li>`
            $('ol').append(str)
            $('#title').val('')
            const spantext = `
                <span id="todocount">${ b + 1}</span>
                `
        }
        add()
    })  

})

function add() {
    $('#todolist > li > a').click(function() {
        $(this).parent().remove()
    })

    $("li > input").on("click", function() {
        if ($(this).attr('checked')) {
            $(this).removeAttr('checked')
            $('#todolist').append($(this).parent())
        } else {
            $(this).attr('checked', 'abc')
            $('#donelist').append($(this).parent())

            up()
            down()
        }
    })

    // $('li > p').click(function() {
    //     console.log(111)
    //     $(this).html('')
    // })

    function up() {
        for (var i = 0; i < $('#todolist > li').length; i++) {
            let a = i
        }
        $('#todocount').text(i - 0)
    }

    function down() {
        for (var i = 0; i < $('#donelist > li').length; i++) {
            let a = i
        }
        $('#donecount').text(i - 0)
    }

    const xx = $.ajax('https://api.i-lynn.cn/getIpInfo', null, null, 'json')

    console.log(xx)
    $('li').on('mouseover', 'p', function() {
        console.log(11)
    })
}