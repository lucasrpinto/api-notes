exports.up = knex => knex.schema.createTable("notes", table => {
    table.increments("id");
    table.text("title");
    table.text("description");
    table.integer("user_id").references("id").inTable("users");

    table.date("created_at").default(knex.fn.now());
    table.date("updated_at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("notes");
