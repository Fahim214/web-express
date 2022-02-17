let users = [
  { id: 1, nama: "Baledemy", email: "baledemy23@gmail.com" },
  { id: 2, nama: "Fahmi Oktafian", email: "fahimun3@gmail.com" },
];

module.exports = {
  index: function (request, response) {
    response.render('pages/user/index', {users})
  },
  create: function(request, response){
    response.render('pages/user/create')
  },
  store: function (request, response) {
    users.push(request.body);
    response.send({
      status: true,
      data: users,
      message: "Data Berhasil disimpan",
      method: request.method,
      url: request.url,
    });
  },
  update: function (request, response) {
    const id = request.params.id;
    users.filter((user) => {
      if (user.id == id) {
        user.id = id;
        user.nama = request.body.nama;
        user.email = request.body.email;

        return user;
      }
    });
    response.json({
      status: true,
      data: users,
      message: "Data berhasil diedit",
      method: request.method,
      url: request.url,
    });
  },
  delete: function (request, response) {
    let id = request.params.userId;
    users = users.filter((user) => user.id != id);
    response.send({
      status: true,
      data: users,
      message: "Data berhasil dihapus",
      method: request.method,
      url: request.url,
    });
  },
};
