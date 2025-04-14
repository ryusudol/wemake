CREATE OR REPLACE FUNCTION track_event(
    event_type event_types,
    event_data jsonb
) RETURNS VOID AS $$
BEGIN
    INSERT INTO events (event_type, event_data) VALUES (event_type, event_data);
end;
$$ LANGUAGE plpgsql