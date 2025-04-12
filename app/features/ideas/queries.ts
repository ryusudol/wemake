import client from "~/supa-client";

export const getGptIdeas = async ({ limit }: { limit: number }) => {
  const { data, error } = await client
    .from("gpt_ideas_view")
    .select("*")
    .limit(limit);
  if (error) throw new Error(error.message);
  return data;
};

export const getGptIdea = async (ideaId: string) => {
  const { data, error } = await client
    .from("gpt_ideas_view")
    .select("*")
    .eq("gpt_idea_id", Number(ideaId))
    .single();
  if (error) throw new Error(error.message);
  return data;
};
