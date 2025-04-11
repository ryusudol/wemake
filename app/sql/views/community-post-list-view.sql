CREATE or REPLACE VIEW community_post_list_view AS
SELECT
  posts.post_id,
  posts.title,
  posts.created_at,
  topics.name AS topic,
  profiles.name AS author,
  profiles.avatar AS author_avatar,
  profiles.username AS author_username,
  posts.upvotes
FROM posts
INNER JOIN topics using (topic_id)
INNER JOIN profiles using (profile_id);