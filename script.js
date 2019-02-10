$(function() {
    $("form").on("submit", function(e) {
        var output = '';
        var checkboxes = $(this).find('input[type="checkbox"]');
        for (var i = 0; i < checkboxes.length; i++) {
            var checkbox = $(checkboxes[i]);
            if (checkbox.prop('checked')) { //prop() は、要素のプロパティを取得するメソッド
                output += checkbox.attr('value') + '\n';
            }
        }
        alert('あなたが選んだ果物:\n' + output);
        console.log("送信ボタンが押されました");
        e.preventDefault(); //preventDefault() は、ブラウザが最初から持っているアクションをキャンセルするメソッド
    });
});