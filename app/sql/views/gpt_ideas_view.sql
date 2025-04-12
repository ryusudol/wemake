CREATE OR REPLACE VIEW gpt_ideas_view AS
SELECT
    ideas.gpt_idea_id,
    ideas.idea,
    ideas.views,
    CASE WHEN ideas.claimed_at IS NULL THEN FALSE ELSE TRUE END AS is_claimed,
    COUNT(gpt_ideas_likes.gpt_idea_id) AS likes,
    ideas.created_at
FROM public.ideas
LEFT JOIN public.gpt_ideas_likes USING (gpt_idea_id)
GROUP BY ideas.gpt_idea_id;