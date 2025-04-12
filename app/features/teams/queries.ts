import client from "~/supa-client";

export const getTeams = async ({ limit }: { limit: number }) => {
  const { data, error } = await client
    .from("teams")
    .select(
      `
    team_id,
    roles,
    `
    )
    .limit(limit);
  if (error) throw new Error(error.message);
  return data;
};
