-- Category table seed data
INSERT INTO "categories" ("name", "description") VALUES
('SaaS', 'Software as a Service products'),
('Mobile Apps', 'Applications for mobile devices'),
('AI', 'Artificial intelligence based products and services'),
('Developer Tools', 'Tools for software developers'),
('Design Tools', 'Tools and resources for designers');

-- Product table seed data
INSERT INTO "products" ("name", "tagline", "description", "how_it_works", "icon", "url", "profile_id", "category_id") VALUES
('CodeMate', 'AI coding assistant for developers', 'CodeMate is an AI-based coding assistant that improves developer productivity.', 'It provides code suggestions and bug fixes through natural language processing and code generation models.', 'https://example.com/codemate.png', 'https://codemate.dev', 'ee5e126e-1d0e-43d4-a446-964487d0daea', 4),
('DesignHub', 'All-in-one platform for designers', 'Manage everything from design inspiration to collaboration in one place.', 'A cloud-based design management system that allows the entire team to share and collaborate on design assets.', 'https://example.com/designhub.png', 'https://designhub.io', 'ee5e126e-1d0e-43d4-a446-964487d0daea', 5),
('SmartTracker', 'Personal finance management app', 'Effectively manage your income and expenses to achieve your financial goals.', 'Uses AI algorithms to analyze user spending patterns and provide personalized financial advice.', 'https://example.com/smarttracker.png', 'https://smarttracker.app', 'ee5e126e-1d0e-43d4-a446-964487d0daea', 2),
('CloudSpace', 'Secure cloud storage solution', 'Store your data securely with encrypted cloud storage.', 'Uses end-to-end encryption technology to securely protect user data.', 'https://example.com/cloudspace.png', 'https://cloudspace.io', 'ee5e126e-1d0e-43d4-a446-964487d0daea', 1),
('AI Writer', 'AI-based writing assistant', 'Write better content faster.', 'Utilizes GPT-based models to generate content for various styles and purposes.', 'https://example.com/aiwriter.png', 'https://aiwriter.tech', 'ee5e126e-1d0e-43d4-a446-964487d0daea', 3),
('TaskFlow', 'Work automation platform', 'Automate repetitive tasks to increase productivity.', 'An AI-powered workflow automation system that efficiently handles repetitive tasks.', 'https://example.com/taskflow.png', 'https://taskflow.dev', 'ee5e126e-1d0e-43d4-a446-964487d0daea', 1),
('HealthTrack', 'Health management app', 'All-in-one app for daily health management.', 'Tracks and analyzes activity, sleep, and diet to provide personalized health management solutions.', 'https://example.com/healthtrack.png', 'https://healthtrack.app', 'ee5e126e-1d0e-43d4-a446-964487d0daea', 2),
('DevOpsHub', 'Development operations automation tool', 'Seamlessly integrate development and operations processes.', 'Automates the entire development lifecycle from code deployment to infrastructure management.', 'https://example.com/devopshub.png', 'https://devopshub.io', 'ee5e126e-1d0e-43d4-a446-964487d0daea', 4),
('ColorPalette', 'Color tool for designers', 'Easily find perfect color combinations.', 'Uses AI technology to suggest optimal color palettes that match your brand identity.', 'https://example.com/colorpalette.png', 'https://colorpalette.design', 'ee5e126e-1d0e-43d4-a446-964487d0daea', 5),
('TranslateNow', 'Real-time translation service', 'Translate all languages in real-time.', 'Provides accurate and natural translation results using deep learning-based language models.', 'https://example.com/translatenow.png', 'https://translatenow.ai', 'ee5e126e-1d0e-43d4-a446-964487d0daea', 3),
('DataViz', 'Data visualization made simple', 'Transform complex data into clear, actionable insights.', 'Uses advanced algorithms to automatically generate beautiful and informative visualizations from raw data.', 'https://example.com/dataviz.png', 'https://dataviz.app', 'ee5e126e-1d0e-43d4-a446-964487d0daea', 5),
('SecureChat', 'End-to-end encrypted messaging platform', 'Communication with uncompromising privacy and security.', 'Implements military-grade encryption protocols to ensure that only intended recipients can access message content.', 'https://example.com/securechat.png', 'https://securechat.io', 'ee5e126e-1d0e-43d4-a446-964487d0daea', 1),
('FitnessPro', 'Personalized workout companion', 'Achieve your fitness goals with customized training plans.', 'Uses machine learning to adapt workout routines based on user performance, preferences, and progress.', 'https://example.com/fitnesspro.png', 'https://fitnesspro.fit', 'ee5e126e-1d0e-43d4-a446-964487d0daea', 2),
('CodeReview', 'Automated code quality checker', 'Improve code quality and catch bugs before they reach production.', 'Analyzes code patterns to identify potential issues, security vulnerabilities, and performance bottlenecks.', 'https://example.com/codereview.png', 'https://codereview.dev', 'ee5e126e-1d0e-43d4-a446-964487d0daea', 4),
('MealPlanner', 'Smart nutrition and meal planning', 'Plan healthy, balanced meals tailored to your dietary needs.', 'Combines nutritional science with AI to generate personalized meal plans that match dietary restrictions and health goals.', 'https://example.com/mealplanner.png', 'https://mealplanner.health', 'ee5e126e-1d0e-43d4-a446-964487d0daea', 2),
('VoiceScript', 'Speech-to-text transcription service', 'Convert spoken words to accurate text in seconds.', 'Employs advanced speech recognition models trained on diverse accents and speaking styles for maximum accuracy.', 'https://example.com/voicescript.png', 'https://voicescript.ai', 'ee5e126e-1d0e-43d4-a446-964487d0daea', 3),
('ProjectSync', 'Project management and team collaboration tool', 'Keep your team aligned and projects on track.', 'Integrates task management, document sharing, and communication in a unified workspace with real-time synchronization.', 'https://example.com/projectsync.png', 'https://projectsync.work', 'ee5e126e-1d0e-43d4-a446-964487d0daea', 1),
('UXPrototype', 'Rapid UI/UX prototyping tool', 'Design and test user interfaces without coding.', 'Provides drag-and-drop components and interactive elements that can be quickly assembled into functional prototypes.', 'https://example.com/uxprototype.png', 'https://uxprototype.design', 'ee5e126e-1d0e-43d4-a446-964487d0daea', 5);

-- Review table seed data
INSERT INTO "reviews" ("product_id", "profile_id", "rating", "review") VALUES
(1, 'ee5e126e-1d0e-43d4-a446-964487d0daea', 5, 'CodeMate has completely transformed my development workflow. It''s truly an innovative tool.'),
(1, 'ee5e126e-1d0e-43d4-a446-964487d0daea', 4, 'Easy to use and provides accurate suggestions. Some improvements needed, but overall I''m satisfied.'),
(2, 'ee5e126e-1d0e-43d4-a446-964487d0daea', 5, 'DesignHub has greatly improved our team''s design process. Collaboration has become much easier!'),
(3, 'ee5e126e-1d0e-43d4-a446-964487d0daea', 4, 'Very helpful for financial management. The interface is intuitive and easy to use.'),
(4, 'ee5e126e-1d0e-43d4-a446-964487d0daea', 5, 'Excellent in both security and usability. I keep all my data safely stored here.'),
(6, 'ee5e126e-1d0e-43d4-a446-964487d0daea', 5, 'TaskFlow has greatly improved our team''s work efficiency. Highly recommended!'),
(7, 'ee5e126e-1d0e-43d4-a446-964487d0daea', 4, 'Really helpful for health management. The interface is intuitive and easy to use.'),
(8, 'ee5e126e-1d0e-43d4-a446-964487d0daea', 5, 'Development process has become much smoother. Team productivity increased by over 50%.'),
(9, 'ee5e126e-1d0e-43d4-a446-964487d0daea', 4, 'Design work has become much easier. It would be perfect with a few more features.'),
(10, 'ee5e126e-1d0e-43d4-a446-964487d0daea', 5, 'The translation quality is amazing. Communication in international projects has become much smoother.');

-- Product upvote table seed data (composite primary key)
INSERT INTO "product_upvotes" ("product_id", "profile_id") VALUES
(1, 'ee5e126e-1d0e-43d4-a446-964487d0daea'),
(2, 'ee5e126e-1d0e-43d4-a446-964487d0daea'),
(3, 'ee5e126e-1d0e-43d4-a446-964487d0daea'),
(4, 'ee5e126e-1d0e-43d4-a446-964487d0daea'),
(5, 'ee5e126e-1d0e-43d4-a446-964487d0daea');

-- Team table seed data
INSERT INTO "teams" ("product_name", "team_size", "equity_split", "product_stage", "roles", "product_description") VALUES
('CodeMate', 5, 20, 'mvp', 'Developer, Designer, Marketer', 'AI-based coding assistant platform'),
('DesignHub', 3, 33, 'prototype', 'Designer, Developer', 'Collaboration platform for designers'),
('SmartTracker', 4, 25, 'product', 'Developer, Finance Expert, Marketer', 'Personal finance management application'),
('CloudSpace', 6, 15, 'mvp', 'Developer, Security Expert, Marketer, Designer', 'Secure cloud storage solution'),
('AI Writer', 2, 50, 'idea', 'Developer, AI Expert', 'AI-based writing assistant');

-- Idea table seed data
INSERT INTO "ideas" ("idea", "views", "claimed_by") VALUES
('AI-based Nutritionist App - Recommends diet plans based on user''s eating habits and health goals', 150, 'ee5e126e-1d0e-43d4-a446-964487d0daea'),
('Cryptocurrency Education Platform - Blockchain and cryptocurrency education for beginners', 120, NULL),
('Automated Code Review Tool - AI-powered service for improving code quality', 200, NULL),
('Community Platform for Digital Nomads - Networking service for remote workers and digital nomads', 180, NULL),
('AR-based Interior Simulation App - Service for virtually placing furniture and interior items', 250, 'ee5e126e-1d0e-43d4-a446-964487d0daea'),
('AI-based Music Composition Tool - Service for creating original music tailored to user styles', 320, NULL),
('Real-time Translation Earphones - Smart earphones that translate multiple languages in real-time', 280, 'ee5e126e-1d0e-43d4-a446-964487d0daea'),
('Sustainable Fashion Marketplace - Platform for eco-friendly clothing trade and recycling', 175, NULL);

-- Idea likes table seed data (composite primary key)
INSERT INTO "gpt_ideas_likes" ("gpt_idea_id", "profile_id") VALUES
(1, 'ee5e126e-1d0e-43d4-a446-964487d0daea'),
(3, 'ee5e126e-1d0e-43d4-a446-964487d0daea'),
(5, 'ee5e126e-1d0e-43d4-a446-964487d0daea');

-- Post topic table seed data
INSERT INTO "topics" ("name", "slug") VALUES
('Development', 'development'),
('Design', 'design'),
('Marketing', 'marketing'),
('Startup', 'startup'),
('AI', 'artificial-intelligence');

-- Post table seed data
INSERT INTO "posts" ("title", "content", "topic_id", "profile_id") VALUES
('Best Practices for State Management in React', 'State management in React is always an important topic. In this post, we compare various state management libraries and patterns...', 1, 'ee5e126e-1d0e-43d4-a446-964487d0daea'),
('Latest Trends in UI Design', 'Exploring UI design trends in 2023 and discussing how to provide effective user experiences...', 2, 'ee5e126e-1d0e-43d4-a446-964487d0daea'),
('Marketing Strategies for SaaS Products', 'Introducing key strategies and case studies for successful marketing of SaaS products...', 3, 'ee5e126e-1d0e-43d4-a446-964487d0daea'),
('Starting a Startup Without Bootstrap', 'A practical guide to starting and growing a startup without investment...', 4, 'ee5e126e-1d0e-43d4-a446-964487d0daea'),
('The Impact of AI on Software Development', 'Analyzing how AI technologies are changing software development processes and the role of developers...', 5, 'ee5e126e-1d0e-43d4-a446-964487d0daea'),
('Analysis of Korean Startup Ecosystem', 'In-depth analysis of the Korean startup environment and investment ecosystem with future prospects...', 4, 'ee5e126e-1d0e-43d4-a446-964487d0daea'),
('Localization Strategies for Mobile App Design', 'Effective methods and case studies for localizing mobile app designs for different cultures...', 2, 'ee5e126e-1d0e-43d4-a446-964487d0daea'),
('Ethical Considerations in AI Development', 'Discussion of ethical issues and solutions to be considered in artificial intelligence development...', 5, 'ee5e126e-1d0e-43d4-a446-964487d0daea');

-- Post reply table seed data
INSERT INTO "post_replies" ("post_id", "profile_id", "reply") VALUES
(1, 'ee5e126e-1d0e-43d4-a446-964487d0daea', 'Could you explain the differences between Redux and Context API in more detail?'),
(1, 'ee5e126e-1d0e-43d4-a446-964487d0daea', 'Really informative post. Zustand seems like a good option to consider too.'),
(2, 'ee5e126e-1d0e-43d4-a446-964487d0daea', 'Neumorphism design seems to be trending again lately.'),
(3, 'ee5e126e-1d0e-43d4-a446-964487d0daea', 'I think content marketing is really important for SaaS.'),
(4, 'ee5e126e-1d0e-43d4-a446-964487d0daea', 'Are there more success stories of startups that began with a bootstrap approach?');

-- Post upvote table seed data (composite primary key)
INSERT INTO "post_upvotes" ("post_id", "profile_id") VALUES
(1, 'ee5e126e-1d0e-43d4-a446-964487d0daea'),
(2, 'ee5e126e-1d0e-43d4-a446-964487d0daea'),
(3, 'ee5e126e-1d0e-43d4-a446-964487d0daea'),
(4, 'ee5e126e-1d0e-43d4-a446-964487d0daea'),
(5, 'ee5e126e-1d0e-43d4-a446-964487d0daea');

-- Message room table seed data
INSERT INTO "message_rooms" DEFAULT VALUES;
INSERT INTO "message_rooms" DEFAULT VALUES;
INSERT INTO "message_rooms" DEFAULT VALUES;
INSERT INTO "message_rooms" DEFAULT VALUES;
INSERT INTO "message_rooms" DEFAULT VALUES;

-- Message room member table seed data (composite primary key)
INSERT INTO "message_room_members" ("message_room_id", "profile_id") VALUES
(1, 'ee5e126e-1d0e-43d4-a446-964487d0daea'),
(2, 'ee5e126e-1d0e-43d4-a446-964487d0daea'),
(3, 'ee5e126e-1d0e-43d4-a446-964487d0daea'),
(4, 'ee5e126e-1d0e-43d4-a446-964487d0daea'),
(5, 'ee5e126e-1d0e-43d4-a446-964487d0daea');

-- Message table seed data
INSERT INTO "messages" ("message_room_id", "sender_id", "content", "seen") VALUES
(1, 'ee5e126e-1d0e-43d4-a446-964487d0daea', 'Hello! Are you interested in the project?', true),
(1, 'ee5e126e-1d0e-43d4-a446-964487d0daea', 'Yes, it seems like a really interesting project.', true),
(2, 'ee5e126e-1d0e-43d4-a446-964487d0daea', 'What is the schedule for the design work?', false),
(3, 'ee5e126e-1d0e-43d4-a446-964487d0daea', 'I would like to discuss marketing strategies.', true),
(4, 'ee5e126e-1d0e-43d4-a446-964487d0daea', 'Please update me on the development progress.', false);

-- Notification table seed data
INSERT INTO "notifications" ("source_id", "target_id", "type", "product_id") VALUES
('ee5e126e-1d0e-43d4-a446-964487d0daea', 'ee5e126e-1d0e-43d4-a446-964487d0daea', 'follow', NULL),
('ee5e126e-1d0e-43d4-a446-964487d0daea', 'ee5e126e-1d0e-43d4-a446-964487d0daea', 'review', 1),
('ee5e126e-1d0e-43d4-a446-964487d0daea', 'ee5e126e-1d0e-43d4-a446-964487d0daea', 'review', 2),
('ee5e126e-1d0e-43d4-a446-964487d0daea', 'ee5e126e-1d0e-43d4-a446-964487d0daea', 'mention', NULL);

-- Follow table seed data (composite primary key)
INSERT INTO "follows" ("follower_id", "following_id") VALUES
('ee5e126e-1d0e-43d4-a446-964487d0daea', 'ee5e126e-1d0e-43d4-a446-964487d0daea');

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
('Mobile App Developer', 'Native mobile app development', 'Android/iOS app development and maintenance', '2+ years mobile app development experience', 'Flexible vacation policy, performance bonuses', 'Swift, Kotlin, Flutter', 'AppStudio', 'https://example.com/appstudio.png', 'Gwangju', 'https://example.com/apply', 'full-time', 'hybrid', '$70,000 - $100,000'),
('AI Research Engineer', 'Research and development of cutting-edge AI models', 'AI algorithm research, model development and optimization, paper writing', 'Masters degree or higher, 2+ years experience in machine learning', 'Research funding, paper presentation opportunities, latest hardware provided', 'Python, PyTorch, TensorFlow, NLP', 'AI Research Labs', 'https://example.com/airesearchlabs.png', 'Seoul', 'https://example.com/apply', 'full-time', 'hybrid', '$70,000 - $100,000'),
('Blockchain Developer', 'Developing distributed applications', 'Smart contract development, blockchain infrastructure setup', '1+ years blockchain development experience, Solidity programming experience', 'Coin reward program, global conference participation support', 'Solidity, Ethereum, Web3.js, Smart Contracts', 'BlockTech', 'https://example.com/blocktech.png', 'Seongnam', 'https://example.com/apply', 'full-time', 'remote', '$60,000 - $90,000'),
('Product Manager', 'Developing user-centered product strategies', 'Product roadmap development, user feedback analysis, feature prioritization', '3+ years product management experience, understanding of agile methodologies', 'Stock options, leadership training programs, flexible working hours', 'Product Strategy, Agile, Jira, User Stories', 'ProductFirst', 'https://example.com/productfirst.png', 'Busan', 'https://example.com/apply', 'full-time', 'in-person', '$60,000 - $80,000'),
('DevOps Engineer', 'Cloud infrastructure management and optimization', 'CI/CD pipeline construction, cloud infrastructure management, monitoring system implementation', '2+ years AWS/GCP experience, container technology experience', 'Remote work possible, self-development funds, latest equipment provided', 'Docker, Kubernetes, AWS, CI/CD, Terraform', 'CloudOps', 'https://example.com/cloudops.png', 'Seoul', 'https://example.com/apply', 'full-time', 'remote', '$70,000 - $90,000'); 