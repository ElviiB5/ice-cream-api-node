const sql = require("../config/db.js")

const Icecream = function(icecream) {
    this.flavor = icecream.flavor
}

Icecream.create = (newIcecream, result) => {
    sql.query("INSERT INTO icecreams SET ?", newIcecream, (err, res) => {
        if (err) {
            console.log("error", err);
            result(err, null);
            return;
        }

        console.log("icecream created: ", { id: res.insertId, ...newIcecream });
        result(null, { id: res.insertId, ...newIcecream })
    })
}

Icecream.getAll = result => {
    sql.query("SELECT * FROM icecreams", (err, res) => {
        if (err) {
            console.log("error", err);
            result(null, err);
            return
        }

        console.log("icecreams:", res);
        result(null, res)
    })
}

Icecream.updateById = (id, newFlavor, result) => {
    sql.query("UPDATE icecreams SET flavor = ? WHERE id = ?", [newFlavor, id],
    (err, res) => {
        if (err) {
            console.log("error", err);
            result(null, err);
            return
        }

        if(res.affectedRows == 0) {
            result({ kind: "not_found" }, null)
            return
        }

        console.log("updated icecream", { id: id, flavor: newFlavor });
        result(null, { id: id, flavor: newFlavor })
    })
}

Icecream.remove = (id, result) => {
    sql.query("DELETE FROM icecreams WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error", err);
            result(null, err)
            return
        }

        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null)
            return
        }

        console.log("deleted icecream", id);
        result(null, res)
    })
}

module.exports = Icecream;