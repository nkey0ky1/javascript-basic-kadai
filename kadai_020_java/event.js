// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
    // li要素を新しく作成する
    const li = document.createElement('li');

    // 作成したli要素をul要素の子要素として作成する。
    text.textContent = 'ボタンをクリックしました';

});