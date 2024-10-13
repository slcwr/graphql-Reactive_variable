document.addEventListener('DOMContentLoaded', function () {
    var editButtons = document.querySelectorAll('#edit-button');
    var deleteButtons = document.querySelectorAll('#delete-button');
    var editModal = document.getElementById('editModal');
    var editForm = document.getElementById('editForm');
    var editButtons = document.querySelectorAll('.edit-button');
    var deleteButtons = document.querySelectorAll('.delete-button');
    var editModal = document.getElementById('editModal');
    var editForm = document.getElementById('editForm');
    // 編集ボタンのイベントリスナー
    editButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var userId = this.getAttribute('data-id');
            var username = this.getAttribute('data-username');
            if (userId && username) {
                openEditModal(userId, username);
            }
        });
    });
    // 削除ボタンのイベントリスナー
    deleteButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var userId = this.getAttribute('data-id');
            if (userId) {
                deleteUser(userId);
            }
        });
    });
    // 編集フォームの送信イベントリスナー
    editForm.addEventListener('submit', function (e) {
        e.preventDefault();
        updateUser();
    });
    // 編集モーダルを開く関数
    function openEditModal(userId, username) {
        var editUserIdInput = document.getElementById('editUserId');
        var editUsernameInput = document.getElementById('editUsername');
        var passwordInput = document.getElementById('password');
        editUserIdInput.value = userId;
        editUsernameInput.value = username;
        passwordInput.value = ''; // パスワードはセキュリティ上の理由で空にする
        editModal.style.display = 'block';
    }
    // 編集モーダルを閉じる関数
    window.closeEditModal = function () {
        editModal.style.display = 'none';
    };
    // ユーザー情報を更新する関数
    function updateUser() {
        var userId = document.getElementById('editUserId').value;
        var username = document.getElementById('editUsername').value;
        var password = document.getElementById('password').value;
        fetch("/users/".concat(userId), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: username, password: password })
        })
            .then(function (response) { return response.json(); })
            .then(function (data) {
            if (data.success) {
                alert('ユーザー情報が更新されました');
                location.reload();
            }
            else {
                alert('更新に失敗しました: ' + data.message);
            }
        })
            .catch(function (error) {
            console.error('Error:', error);
            alert('更新中にエラーが発生しました');
        });
        closeEditModal();
    }
    // ユーザーを削除する関数
    function deleteUser(userId) {
        if (confirm('本当にこのユーザーを削除しますか？')) {
            fetch("/users/".concat(userId), { method: 'DELETE' })
                .then(function (response) { return response.json(); })
                .then(function (data) {
                if (data.success) {
                    alert('ユーザーが削除されました');
                    location.reload();
                }
                else {
                    alert('削除に失敗しました: ' + data.message);
                }
            })
                .catch(function (error) {
                console.error('Error:', error);
                alert('削除中にエラーが発生しました');
            });
        }
    }
});
