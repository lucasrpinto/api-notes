const createUsers = `
    CREATE TABLE IF NOT EXISTS users (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR,
    email VARCHAR,
    password VARCHAR,
    avatar VARCHAR NULL,
    created_at DATE DEFAULT (date('now')),
    updated_at DATE DEFAULT (date('now'))
)
`;

module.exports = createUsers