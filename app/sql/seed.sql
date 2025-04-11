-- Category table seed data
INSERT INTO "categories" ("name", "description") VALUES
('SaaS', 'Software as a Service products'),
('Mobile Apps', 'Applications for mobile devices'),
('AI', 'Artificial intelligence based products and services'),
('Developer Tools', 'Tools for software developers'),
('Design Tools', 'Tools and resources for designers');

-- Product table seed data
INSERT INTO "products" ("name", "tagline", "description", "how_it_works", "icon", "url", "profile_id", "category_id") VALUES
('CodeMate', 'AI coding assistant for developers', 'CodeMate is an AI-based coding assistant that improves developer productivity.', 'It provides code suggestions and bug fixes through natural language processing and code generation models.', 'https://example.com/codemate.png', 'https://codemate.dev', '2829c905-1254-4b8f-91eb-97cf99e86dcd', 4),
('DesignHub', 'All-in-one platform for designers', 'Manage everything from design inspiration to collaboration in one place.', 'A cloud-based design management system that allows the entire team to share and collaborate on design assets.', 'https://example.com/designhub.png', 'https://designhub.io', '2829c905-1254-4b8f-91eb-97cf99e86dcd', 5),
('SmartTracker', 'Personal finance management app', 'Effectively manage your income and expenses to achieve your financial goals.', 'Uses AI algorithms to analyze user spending patterns and provide personalized financial advice.', 'https://example.com/smarttracker.png', 'https://smarttracker.app', '2829c905-1254-4b8f-91eb-97cf99e86dcd', 2),
('CloudSpace', 'Secure cloud storage solution', 'Store your data securely with encrypted cloud storage.', 'Uses end-to-end encryption technology to securely protect user data.', 'https://example.com/cloudspace.png', 'https://cloudspace.io', '2829c905-1254-4b8f-91eb-97cf99e86dcd', 1),
('AI Writer', 'AI-based writing assistant', 'Write better content faster.', 'Utilizes GPT-based models to generate content for various styles and purposes.', 'https://example.com/aiwriter.png', 'https://aiwriter.tech', '2829c905-1254-4b8f-91eb-97cf99e86dcd', 3);

-- Review table seed data
INSERT INTO "reviews" ("product_id", "profile_id", "rating", "review") VALUES
(1, '2829c905-1254-4b8f-91eb-97cf99e86dcd', 5, 'CodeMate has completely transformed my development workflow. It''s truly an innovative tool.'),
(1, '2829c905-1254-4b8f-91eb-97cf99e86dcd', 4, 'Easy to use and provides accurate suggestions. Some improvements needed, but overall I''m satisfied.'),
(2, '2829c905-1254-4b8f-91eb-97cf99e86dcd', 5, 'DesignHub has greatly improved our team''s design process. Collaboration has become much easier!'),
(3, '2829c905-1254-4b8f-91eb-97cf99e86dcd', 4, 'Very helpful for financial management. The interface is intuitive and easy to use.'),
(4, '2829c905-1254-4b8f-91eb-97cf99e86dcd', 5, 'Excellent in both security and usability. I keep all my data safely stored here.');

-- Product upvote table seed data (composite primary key)
INSERT INTO "product_upvotes" ("product_id", "profile_id") VALUES
(1, '2829c905-1254-4b8f-91eb-97cf99e86dcd'),
(2, '2829c905-1254-4b8f-91eb-97cf99e86dcd'),
(3, '2829c905-1254-4b8f-91eb-97cf99e86dcd'),
(4, '2829c905-1254-4b8f-91eb-97cf99e86dcd'),
(5, '2829c905-1254-4b8f-91eb-97cf99e86dcd');

-- Team table seed data
INSERT INTO "teams" ("product_name", "team_size", "equity_split", "product_stage", "roles", "product_description") VALUES
('CodeMate', 5, 20, 'mvp', 'Developer, Designer, Marketer', 'AI-based coding assistant platform'),
('DesignHub', 3, 33, 'prototype', 'Designer, Developer', 'Collaboration platform for designers'),
('SmartTracker', 4, 25, 'product', 'Developer, Finance Expert, Marketer', 'Personal finance management application'),
('CloudSpace', 6, 15, 'mvp', 'Developer, Security Expert, Marketer, Designer', 'Secure cloud storage solution'),
('AI Writer', 2, 50, 'idea', 'Developer, AI Expert', 'AI-based writing assistant');

-- Idea table seed data
INSERT INTO "ideas" ("idea", "views", "claimed_by") VALUES
('AI-based Nutritionist App - Recommends diet plans based on user''s eating habits and health goals', 150, '2829c905-1254-4b8f-91eb-97cf99e86dcd'),
('Cryptocurrency Education Platform - Blockchain and cryptocurrency education for beginners', 120, NULL),
('Automated Code Review Tool - AI-powered service for improving code quality', 200, NULL),
('Community Platform for Digital Nomads - Networking service for remote workers and digital nomads', 180, NULL),
('AR-based Interior Simulation App - Service for virtually placing furniture and interior items', 250, '2829c905-1254-4b8f-91eb-97cf99e86dcd');

-- Idea likes table seed data (composite primary key)
INSERT INTO "gpt_ideas_likes" ("gpt_idea_id", "profile_id") VALUES
(1, '2829c905-1254-4b8f-91eb-97cf99e86dcd'),
(3, '2829c905-1254-4b8f-91eb-97cf99e86dcd'),
(5, '2829c905-1254-4b8f-91eb-97cf99e86dcd');

-- Post topic table seed data
INSERT INTO "topics" ("name", "slug") VALUES
('Development', 'development'),
('Design', 'design'),
('Marketing', 'marketing'),
('Startup', 'startup'),
('AI', 'artificial-intelligence');

-- Post table seed data
INSERT INTO "posts" ("title", "content", "topic_id", "profile_id") VALUES
('Best Practices for State Management in React', 'State management in React is always an important topic. In this post, we compare various state management libraries and patterns...', 1, '2829c905-1254-4b8f-91eb-97cf99e86dcd'),
('Latest Trends in UI Design', 'Exploring UI design trends in 2023 and discussing how to provide effective user experiences...', 2, '2829c905-1254-4b8f-91eb-97cf99e86dcd'),
('Marketing Strategies for SaaS Products', 'Introducing key strategies and case studies for successful marketing of SaaS products...', 3, '2829c905-1254-4b8f-91eb-97cf99e86dcd'),
('Starting a Startup Without Bootstrap', 'A practical guide to starting and growing a startup without investment...', 4, '2829c905-1254-4b8f-91eb-97cf99e86dcd'),
('The Impact of AI on Software Development', 'Analyzing how AI technologies are changing software development processes and the role of developers...', 5, '2829c905-1254-4b8f-91eb-97cf99e86dcd');

-- Post reply table seed data
INSERT INTO "post_replies" ("post_id", "profile_id", "reply") VALUES
(1, '2829c905-1254-4b8f-91eb-97cf99e86dcd', 'Could you explain the differences between Redux and Context API in more detail?'),
(1, '2829c905-1254-4b8f-91eb-97cf99e86dcd', 'Really informative post. Zustand seems like a good option to consider too.'),
(2, '2829c905-1254-4b8f-91eb-97cf99e86dcd', 'Neumorphism design seems to be trending again lately.'),
(3, '2829c905-1254-4b8f-91eb-97cf99e86dcd', 'I think content marketing is really important for SaaS.'),
(4, '2829c905-1254-4b8f-91eb-97cf99e86dcd', 'Are there more success stories of startups that began with a bootstrap approach?');

-- Post upvote table seed data (composite primary key)
INSERT INTO "post_upvotes" ("post_id", "profile_id") VALUES
(1, '2829c905-1254-4b8f-91eb-97cf99e86dcd'),
(2, '2829c905-1254-4b8f-91eb-97cf99e86dcd'),
(3, '2829c905-1254-4b8f-91eb-97cf99e86dcd'),
(4, '2829c905-1254-4b8f-91eb-97cf99e86dcd'),
(5, '2829c905-1254-4b8f-91eb-97cf99e86dcd');

-- Message room table seed data
INSERT INTO "message_rooms" DEFAULT VALUES;
INSERT INTO "message_rooms" DEFAULT VALUES;
INSERT INTO "message_rooms" DEFAULT VALUES;
INSERT INTO "message_rooms" DEFAULT VALUES;
INSERT INTO "message_rooms" DEFAULT VALUES;

-- Message room member table seed data (composite primary key)
INSERT INTO "message_room_members" ("message_room_id", "profile_id") VALUES
(1, '2829c905-1254-4b8f-91eb-97cf99e86dcd'),
(2, '2829c905-1254-4b8f-91eb-97cf99e86dcd'),
(3, '2829c905-1254-4b8f-91eb-97cf99e86dcd'),
(4, '2829c905-1254-4b8f-91eb-97cf99e86dcd'),
(5, '2829c905-1254-4b8f-91eb-97cf99e86dcd');

-- Message table seed data
INSERT INTO "messages" ("message_room_id", "sender_id", "content", "seen") VALUES
(1, '2829c905-1254-4b8f-91eb-97cf99e86dcd', 'Hello! Are you interested in the project?', true),
(1, '2829c905-1254-4b8f-91eb-97cf99e86dcd', 'Yes, it seems like a really interesting project.', true),
(2, '2829c905-1254-4b8f-91eb-97cf99e86dcd', 'What is the schedule for the design work?', false),
(3, '2829c905-1254-4b8f-91eb-97cf99e86dcd', 'I would like to discuss marketing strategies.', true),
(4, '2829c905-1254-4b8f-91eb-97cf99e86dcd', 'Please update me on the development progress.', false);

-- Notification table seed data
INSERT INTO "notifications" ("source_id", "target_id", "type", "product_id") VALUES
('2829c905-1254-4b8f-91eb-97cf99e86dcd', '2829c905-1254-4b8f-91eb-97cf99e86dcd', 'follow', NULL),
('2829c905-1254-4b8f-91eb-97cf99e86dcd', '2829c905-1254-4b8f-91eb-97cf99e86dcd', 'review', 1),
('2829c905-1254-4b8f-91eb-97cf99e86dcd', '2829c905-1254-4b8f-91eb-97cf99e86dcd', 'review', 2),
('2829c905-1254-4b8f-91eb-97cf99e86dcd', '2829c905-1254-4b8f-91eb-97cf99e86dcd', 'mention', NULL);

-- Follow table seed data (composite primary key)
INSERT INTO "follows" ("follower_id", "following_id") VALUES
('2829c905-1254-4b8f-91eb-97cf99e86dcd', '2829c905-1254-4b8f-91eb-97cf99e86dcd');

-- Job table seed data
INSERT INTO "jobs" (
  "position", "overview", "responsibilities", "qualifications", "benefits", 
  "skills", "company_name", "company_logo_url", "company_location", 
  "apply_url", "job_type", "location_type", "salary_range"
) VALUES
('Senior Frontend Developer', 'Developing user interfaces for web applications', 'UI development, code optimization, test automation', '3+ years React experience, proficient in TypeScript', 'Flexible working hours, remote work option, health insurance', 'React, TypeScript, CSS, Jest', 'TechStart', 'https://example.com/techstart.png', 'Seoul', 'https://example.com/apply', 'full-time', 'remote', '$70,000 - $100,000'),
('Backend Developer', 'Developing scalable server systems', 'API design and implementation, database optimization', '2+ years Node.js experience, database experience', 'Stock options, professional development support', 'Node.js, PostgreSQL, Docker', 'CloudWorks', 'https://example.com/cloudworks.png', 'Busan', 'https://example.com/apply', 'full-time', 'hybrid', '$50,000 - $70,000'),
('UX/UI Designer', 'Developing user-centered designs', 'Creating wireframes, user testing, managing design systems', '2+ years UX/UI experience, portfolio required', 'Creative work environment, latest design tools provided', 'Figma, Adobe XD, Sketch', 'DesignLab', 'https://example.com/designlab.png', 'Incheon', 'https://example.com/apply', 'full-time', 'in-person', '$50,000 - $70,000'),
('Data Scientist', 'Supporting data-driven decision making', 'Data analysis, model development, providing insights', 'Masters in Statistics or Computer Science, Python experience', 'Research conference participation support, latest hardware provided', 'Python, R, TensorFlow, SQL', 'DataTech', 'https://example.com/datatech.png', 'Daejeon', 'https://example.com/apply', 'part-time', 'remote', '$100,000 - $120,000'),
('Mobile App Developer', 'Native mobile app development', 'Android/iOS app development and maintenance', '2+ years mobile app development experience', 'Flexible vacation policy, performance bonuses', 'Swift, Kotlin, Flutter', 'AppStudio', 'https://example.com/appstudio.png', 'Gwangju', 'https://example.com/apply', 'full-time', 'hybrid', '$70,000 - $100,000'); 