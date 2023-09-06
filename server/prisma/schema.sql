DROP TABLE IF EXISTS users, links, link_click_history;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE links (
  id BIGSERIAL PRIMARY KEY,
  hash VARCHAR(10) UNIQUE NOT NULL,
  original_url VARCHAR(2048) NOT NULL,
  clicked INTEGER DEFAULT 0,
  expiry_date TIMESTAMP,
  access_code VARCHAR(25),

  user_id INTEGER REFERENCES users(id)
);

CREATE TABLE link_click_history (
  id BIGSERIAL PRIMARY KEY,
  link_id BIGINT  REFERENCES links(id) NOT NULL,
  visited_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  user_agent VARCHAR(255) NOT NULL,
  ip_address VARCHAR(30)
);

CREATE INDEX idx_link_user_id ON links(user_id);
CREATE INDEX idx_link_click_history_link_id ON link_click_history(link_id);