var state = '';

// menampilkan semua user kedalam tabel
$(document).ready(function(){
	loadUsers();
});

// menampilkan modal tambah user
$('.add').click(function(){
	state = 'add';
	// clear semua inputan
	clearForm();
	// tampilkan modal
	$('.modal-title').html('Tambahkan user');
	$('#modal').modal('show');
});

// menampilkan modal informasi user
$(document).on('click', '.btn-info', function(){
	const id = $(this).data('id');
	state = 'update';
	$.get(`/show.php?id=${id}`, function(res){
		$('[name="id"]').val(res.id);
		$('[name="name"]').val(res.name);
		$('[name="email"]').val(res.email);
		$('[name="mobile"]').val(res.mobile);
	})
	// tampilkan modal
	$('.modal-title').html('Informasi user');
	$('#modal').modal('show');
});

// hapus user
$(document).on('click', '.btn-danger', function(){
	const id = $(this).data('id');
	$.post('/delete.php', {id: id}, function(res){
		if(res.message == 'success'){
			showToast('User berhasil dihapus', 'Berhasil');
			// load ulang semua user
			loadUsers();
		} else {
			showToast('Operasi gagal dilakukan', 'Gagal');
		}
	})
})

// ketika tombol simpan di-klik
$('.btn-simpan').click(function(){
	// simpan user baru
	if(state === 'add') {
		$.post('/add.php', {
			name: $('[name="name"]').val(),
			email: $('[name="email"]').val(),
			mobile: $('[name="mobile"]').val()
		}, function(res){
			if(res.message == 'success') {
				showToast('User berhasil ditambahkan', 'Berhasil');
			} else {
				showToast('Operasi gagal dilakukan', 'Gagal');
			}
		});

		// clear semua inputan
		clearForm();
	}

	// update user
	if(state === 'update') {
		const id = $('[name="id"]').val();
		$.post('/update.php', {
			id: id,
			name: $('[name="name"]').val(),
			email: $('[name="email"]').val(),
			mobile: $('[name="mobile"]').val()
		}, function(res){
			if(res.message == 'success') {
				showToast('User berhasil diupdate', 'Berhasil');
			} else {
				showToast('Operasi gagal dilakukan', 'Gagal');
			}
		});
	}
	// load ulang semua user
	loadUsers();
});

// tampilkan Toast
function showToast(message, title) {
	$('.toast-title').html(title);
	$('.toast-body').html(message);
	$('#toast').toast('show', {
		delay: 2000
	});
}

// load semua semua user
function loadUsers(){
	let users = '';
	// ambil data user dari API
	$.get('/all.php',function(res){
		res.forEach(res => {
			users += `
			<tr>
				<td>${res.id}</td>
				<td>${res.name}</td>
				<td>${res.email}</td>
				<td>${res.mobile}</td>
				<td class="text-center">
					<button data-id="${res.id}" class="btn btn-info btn-sm">Informasi</button>
					<button data-id="${res.id}" class="btn btn-danger btn-sm">Hapus</button>
				</td>
			</tr>`;
		});
		// masukkan ke tabel
		$('#users').html(users);
	});
}

function clearForm() {
	$('[name="name"]').val('');
	$('[name="email"]').val('');
	$('[name="mobile"]').val('');
}