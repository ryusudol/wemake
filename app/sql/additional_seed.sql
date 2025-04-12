-- Additional product data
INSERT INTO "products" ("name", "tagline", "description", "how_it_works", "icon", "url", "profile_id", "category_id") VALUES
('TaskFlow', 'Work automation platform', 'Automate repetitive tasks to increase productivity.', 'An AI-powered workflow automation system that efficiently handles repetitive tasks.', 'https://example.com/taskflow.png', 'https://taskflow.dev', '2829c905-1254-4b8f-91eb-97cf99e86dcd', 1),
('HealthTrack', 'Health management app', 'All-in-one app for daily health management.', 'Tracks and analyzes activity, sleep, and diet to provide personalized health management solutions.', 'https://example.com/healthtrack.png', 'https://healthtrack.app', '2829c905-1254-4b8f-91eb-97cf99e86dcd', 2),
('DevOpsHub', 'Development operations automation tool', 'Seamlessly integrate development and operations processes.', 'Automates the entire development lifecycle from code deployment to infrastructure management.', 'https://example.com/devopshub.png', 'https://devopshub.io', '2829c905-1254-4b8f-91eb-97cf99e86dcd', 4),
('ColorPalette', 'Color tool for designers', 'Easily find perfect color combinations.', 'Uses AI technology to suggest optimal color palettes that match your brand identity.', 'https://example.com/colorpalette.png', 'https://colorpalette.design', '2829c905-1254-4b8f-91eb-97cf99e86dcd', 5),
('TranslateNow', 'Real-time translation service', 'Translate all languages in real-time.', 'Provides accurate and natural translation results using deep learning-based language models.', 'https://example.com/translatenow.png', 'https://translatenow.ai', '2829c905-1254-4b8f-91eb-97cf99e86dcd', 3);

-- Additional review data
INSERT INTO "reviews" ("product_id", "profile_id", "rating", "review") VALUES
(6, '2829c905-1254-4b8f-91eb-97cf99e86dcd', 5, 'TaskFlow has greatly improved our team''s work efficiency. Highly recommended!'),
(7, '2829c905-1254-4b8f-91eb-97cf99e86dcd', 4, 'Really helpful for health management. The interface is intuitive and easy to use.'),
(8, '2829c905-1254-4b8f-91eb-97cf99e86dcd', 5, 'Development process has become much smoother. Team productivity increased by over 50%.'),
(9, '2829c905-1254-4b8f-91eb-97cf99e86dcd', 4, 'Design work has become much easier. It would be perfect with a few more features.'),
(10, '2829c905-1254-4b8f-91eb-97cf99e86dcd', 5, 'The translation quality is amazing. Communication in international projects has become much smoother.');

-- Additional idea data
INSERT INTO "ideas" ("idea", "views", "claimed_by") VALUES
('AI-based Music Composition Tool - Service for creating original music tailored to user styles', 320, NULL),
('Real-time Translation Earphones - Smart earphones that translate multiple languages in real-time', 280, '2829c905-1254-4b8f-91eb-97cf99e86dcd'),
('Sustainable Fashion Marketplace - Platform for eco-friendly clothing trade and recycling', 175, NULL);

-- Additional post data
INSERT INTO "posts" ("title", "content", "topic_id", "profile_id") VALUES
('Analysis of Korean Startup Ecosystem', 'In-depth analysis of the Korean startup environment and investment ecosystem with future prospects...', 4, '2829c905-1254-4b8f-91eb-97cf99e86dcd'),
('Localization Strategies for Mobile App Design', 'Effective methods and case studies for localizing mobile app designs for different cultures...', 2, '2829c905-1254-4b8f-91eb-97cf99e86dcd'),
('Ethical Considerations in AI Development', 'Discussion of ethical issues and solutions to be considered in artificial intelligence development...', 5, '2829c905-1254-4b8f-91eb-97cf99e86dcd');

-- Additional job data
INSERT INTO "jobs" (
  "position", "overview", "responsibilities", "qualifications", "benefits", 
  "skills", "company_name", "company_logo_url", "company_location", 
  "apply_url", "job_type", "location_type", "salary_range"
) VALUES
('AI Research Engineer', 'Research and development of cutting-edge AI models', 'AI algorithm research, model development and optimization, paper writing', 'Masters degree or higher, 2+ years experience in machine learning', 'Research funding, paper presentation opportunities, latest hardware provided', 'Python, PyTorch, TensorFlow, NLP', 'AI Research Labs', 'https://example.com/airesearchlabs.png', 'Seoul', 'https://example.com/apply', 'full-time', 'hybrid', '$70,000 - $100,000'),
('Blockchain Developer', 'Developing distributed applications', 'Smart contract development, blockchain infrastructure setup', '1+ years blockchain development experience, Solidity programming experience', 'Coin reward program, global conference participation support', 'Solidity, Ethereum, Web3.js, Smart Contracts', 'BlockTech', 'https://example.com/blocktech.png', 'Seongnam', 'https://example.com/apply', 'full-time', 'remote', '$100,000 - $120,000'),
('Product Manager', 'Developing user-centered product strategies', 'Product roadmap development, user feedback analysis, feature prioritization', '3+ years product management experience, understanding of agile methodologies', 'Stock options, leadership training programs, flexible working hours', 'Product Strategy, Agile, Jira, User Stories', 'ProductFirst', 'https://example.com/productfirst.png', 'Busan', 'https://example.com/apply', 'full-time', 'in-person', '$150,000 - $250,000'),
('DevOps Engineer', 'Cloud infrastructure management and optimization', 'CI/CD pipeline construction, cloud infrastructure management, monitoring system implementation', '2+ years AWS/GCP experience, container technology experience', 'Remote work possible, self-development funds, latest equipment provided', 'Docker, Kubernetes, AWS, CI/CD, Terraform', 'CloudOps', 'https://example.com/cloudops.png', 'Seoul', 'https://example.com/apply', 'full-time', 'remote', '$120,000 - $150,000');