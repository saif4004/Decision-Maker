INSERT INTO users (name, email) VALUES
('Paul', 'paul@gmail.com'),
('John', 'john@yahoo.com'),
('Alice', 'alice@outlook.com'),
('Bob', 'bob@gmail.com'),
('Charlie', 'charlie@yahoo.com'),
('David', 'david@outlook.com'),
('Eve', 'eve@gmail.com'),
('Frank', 'frank@icloud.com'),
('Grace', 'grace@yahoo.com'),
('Hannah', 'hannah@outlook.com'),
('Ivy', 'ivy@gmail.com'),
('Jack', 'jack@live.com'),
('Karen', 'karen@yahoo.com'),
('Leo', 'leo@gmail.com'),
('Mia', 'mia@outlook.com'),
('Nina', 'nina@gmail.com'),
('Oscar', 'oscar@yahoo.com'),
('Pauline', 'pauline@outlook.com'),
('Quinn', 'quinn@gmail.com'),
('Ray', 'ray@icloud.com'),
('Sophie', 'sophie@yahoo.com'),
('Tom', 'tom@outlook.com'),
('Uma', 'uma@gmail.com'),
('Vera', 'vera@live.com'),
('Will', 'will@yahoo.com');

INSERT INTO polls (question, creator_link, poll_link) VALUES
('Where should we eat?', 'creator1', 'poll1'),
('What movie should we watch?', 'creator2', 'poll2'),
('Which game should we play?', 'creator3', 'poll3'),
('What activity should we do this weekend?', 'creator4', 'poll4'),
('Where should we go on vacation?', 'creator5', 'poll5'),
('What restaurant should we try next?', 'creator6', 'poll6'),
('Which book should we read for the book club?', 'creator7', 'poll7'),
('What theme should we choose for the party?', 'creator8', 'poll8'),
('What time should we meet up?', 'creator9', 'poll9'),
('Which music playlist should we listen to?', 'creator10', 'poll10'),
('What should be our next group project?', 'creator11', 'poll11'),
('Where should we have our next team outing?', 'creator12', 'poll12'),
('What sport should we play together?', 'creator13', 'poll13'),
('Which city should we explore next?', 'creator14', 'poll14'),
('What should we do for the next holiday gathering?', 'creator15', 'poll15'),
('Which charity should we support this year?', 'creator16', 'poll16'),
('What color scheme should we use for the event?', 'creator17', 'poll17'),
('What snack should we bring to the movie night?', 'creator18', 'poll18'),
('Which online course should we take together?', 'creator19', 'poll19'),
('What theme should we choose for next month’s book club?', 'creator20', 'poll20'),
('What should be our next team-building activity?', 'creator21', 'poll21'),
('Where should we host the next meeting?', 'creator22', 'poll22'),
('What should we watch for our next group movie night?', 'creator23', 'poll23'),
('What should we order for lunch?', 'creator24', 'poll24'),
('What hobby should we try together?', 'creator25', 'poll25');

INSERT INTO poll_creators (user_id, poll_id, creator) VALUES
(1, 1, false),
(2, 2, true),
(3, 3, false),
(4, 4, false),
(5, 5, true),
(6, 6, false),
(7, 7, true),
(8, 8, false),
(9, 9, false),
(10, 10, true),
(11, 11, false),
(12, 12, false),
(13, 13, true),
(14, 14, false),
(15, 15, true),
(16, 16, false),
(17, 17, false),
(18, 18, true),
(19, 19, false),
(20, 20, false),
(21, 21, true),
(22, 22, false),
(23, 23, true),
(24, 24, false),
(25, 25, false);

INSERT INTO choices (poll_id, title, description) VALUES
(1, 'Alfredos', 'Italian'),
(1, 'Sushi Palace', 'Japanese'),
(1, 'Burger Haven', ''),
(1, 'Taco Town', ''),
(1, 'Green Garden', 'Vegetarian'),

(2, 'Inception', 'A mind-bending thriller'),
(2, 'The Lion King', ''),
(2, 'The Matrix', 'A sci-fi action film'),
(2, 'Titanic', 'A romantic drama'),
(2, 'Spider-Man: No Way Home', ''),

(3, 'Among Us', ''),
(3, 'Minecraft', ''),
(3, 'Monopoly', 'A classic board game'),
(3, 'Codenames', 'A word-based party game'),
(3, 'Mario Kart', ''),

(4, 'Hiking', ''),
(4, 'Movie Marathon', 'A series of films back-to-back'),
(4, 'Picnic', ''),
(4, 'Game Night', 'Playing board games and card games'),
(4, 'Visit a Museum', ''),

(5, 'Hawaii', ''),
(5, 'Paris', 'The city of love'),
(5, 'Tokyo', ''),
(5, 'New York City', 'A bustling metropolis'),
(5, 'Bali', ''),

(6, 'Olive Garden', 'Italian chain restaurant'),
(6, 'Red Lobster', ''),
(6, 'Cheesecake Factory', 'Known for its desserts'),
(6, 'Chipotle', ''),
(6, 'Panda Express', 'American-Chinese fast food'),

(7, 'The Great Gatsby', ''),
(7, '1984', 'A dystopian novel by George Orwell'),
(7, 'Pride and Prejudice', ''),
(7, 'To Kill a Mockingbird', 'A classic American novel'),
(7, 'The Catcher in the Rye', ''),

(8, 'Tropical', ''),
(8, 'Hollywood', 'Red carpet and movie stars'),
(8, 'Masquerade', ''),
(8, 'Retro', 'Themes from past decades'),
(8, 'Fantasy', ''),

(9, '6 PM', ''),
(9, '7 PM', 'After work hours'),
(9, '8 PM', ''),
(9, '5 PM', ''),
(9, 'Anytime', 'Flexible schedule'),

(10, 'Top Hits 2024', ''),
(10, 'Chill Vibes', 'Relaxing tunes for unwinding'),
(10, 'Throwback Classics', ''),
(10, 'Indie Favorites', ''),
(10, 'Party Mix', 'Upbeat tracks for dancing'),

(11, 'Community Garden', ''),
(11, 'Charity Fundraiser', 'Support a local cause'),
(11, 'Art Installation', ''),
(11, 'Documentary Film', 'Explore a relevant topic'),
(11, 'Recycling Initiative', ''),

(12, 'Bowling Alley', ''),
(12, 'Escape Room', 'Team-building experience'),
(12, 'Amusement Park', ''),
(12, 'Picnic in the Park', 'Casual outdoor gathering'),
(12, 'Sports Game', 'Cheer for our local team'),

(13, 'Soccer', ''),
(13, 'Basketball', 'Fast-paced and fun'),
(13, 'Volleyball', ''),
(13, 'Ultimate Frisbee', ''),
(13, 'Tennis', 'Singles or doubles match'),

(14, 'San Francisco', ''),
(14, 'New Orleans', 'Famous for its vibrant culture'),
(14, 'Chicago', ''),
(14, 'Miami', 'Known for its beaches'),
(14, 'Seattle', ''),

(15, 'Potluck Dinner', ''),
(15, 'Secret Santa', 'Gift exchange game'),
(15, 'Holiday Movie Night', ''),
(15, 'Outdoor BBQ', 'Fun in the sun'),
(15, 'Karaoke Night', 'Sing your heart out'),

(16, 'Local Food Bank', ''),
(16, 'Animal Shelter', 'Help abandoned pets'),
(16, 'Environmental Organization', ''),
(16, 'Children’s Hospital', 'Support sick kids'),
(16, 'Educational Foundation', ''),

(17, 'Blue and Gold', ''),
(17, 'Red and White', 'Classic combination'),
(17, 'Green and Brown', ''),
(17, 'Black and Silver', ''),
(17, 'Pastels', 'Soft and inviting tones'),

(18, 'Popcorn', 'A movie classic'),
(18, 'Nachos', ''),
(18, 'Candy', 'Sweet treats for everyone'),
(18, 'Veggie Platter', ''),
(18, 'Chips and Dip', ''),

(19, 'Photography Basics', ''),
(19, 'Cooking for Beginners', 'Learn to cook simple dishes'),
(19, 'Web Development', ''),
(19, 'Graphic Design', ''),
(19, 'Creative Writing', 'Improve your writing skills'),

(20, 'Mystery', ''),
(20, 'Science Fiction', 'Explore futuristic worlds'),
(20, 'Biography', ''),
(20, 'Fantasy', ''),
(20, 'Historical Fiction', 'Stories from the past'),

(21, 'Cooking Class', ''),
(21, 'Outdoor Adventure', 'Explore nature together'),
(21, 'Team Sports Day', ''),
(21, 'Volunteering', 'Give back to the community'),
(21, 'Workshop', 'Skill-building session'),

(22, 'Local Cafe', ''),
(22, 'Office Conference Room', 'Convenient for everyone'),
(22, 'Park', 'If the weather permits'),
(22, 'Community Center', ''),
(22, 'Virtual Meeting', 'For remote attendees'),

(23, 'The Avengers', ''),
(23, 'The Godfather', 'An iconic classic'),
(23, 'Frozen', ''),
(23, 'Jurassic Park', 'Dinosaurs on screen'),
(23, 'Finding Nemo', ''),

(24, 'Pizza', 'Always a favorite'),
(24, 'Sushi', ''),
(24, 'Sandwiches', ''),
(24, 'Salads', 'Healthy and fresh'),
(24, 'Tacos', ''),

(25, 'Painting', 'Get creative with colors'),
(25, 'Gardening', ''),
(25, 'Photography', 'Capture moments together'),
(25, 'Hiking', ''),
(25, 'Cooking', 'Explore new recipes');

INSERT INTO responses (respondent_id, choice_id, ranking) VALUES
(7, 2, 1),  -- User 7 selects choice ID 2 as their first choice
(7, 1, 2),  -- User 7 selects choice ID 1 as their second choice
(7, 3, 3),  -- User 7 selects choice ID 3 as their third choice

(3, 1, 1),  -- User 3 selects choice ID 1 as their first choice
(3, 2, 2),  -- User 3 selects choice ID 2 as their second choice
(3, 3, 3),  -- User 3 selects choice ID 3 as their third choice

(12, 2, 1), -- User 12 selects choice ID 2 as their first choice
(12, 4, 2), -- User 12 selects choice ID 4 as their second choice
(12, 1, 3), -- User 12 selects choice ID 1 as their third choice

(2, 6, 1),  -- User 2 selects choice ID 6 as their first choice
(2, 7, 2),  -- User 2 selects choice ID 7 as their second choice
(2, 8, 3),  -- User 2 selects choice ID 8 as their third choice

(4, 9, 1),  -- User 4 selects choice ID 9 as their first choice
(4, 6, 2),  -- User 4 selects choice ID 6 as their second choice
(4, 7, 3),  -- User 4 selects choice ID 7 as their third choice

(9, 8, 1),  -- User 9 selects choice ID 8 as their first choice
(9, 10, 2), -- User 9 selects choice ID 10 as their second choice
(9, 7, 3),  -- User 9 selects choice ID 7 as their third choice

(11, 9, 1), -- User 11 selects choice ID 9 as their first choice
(11, 6, 2), -- User 11 selects choice ID 6 as their second choice
(11, 10, 3),-- User 11 selects choice ID 10 as their third choice

(14, 7, 1), -- User 14 selects choice ID 7 as their first choice
(14, 8, 2), -- User 14 selects choice ID 8 as their second choice
(14, 9, 3), -- User 14 selects choice ID 9 as their third choice

(1, 11, 1),  -- User 1 selects choice ID 11 as their first choice
(1, 12, 2),  -- User 1 selects choice ID 12 as their second choice
(1, 13, 3),  -- User 1 selects choice ID 13 as their third choice

(6, 13, 1),  -- User 6 selects choice ID 13 as their first choice
(6, 14, 2),  -- User 6 selects choice ID 14 as their second choice
(6, 11, 3),  -- User 6 selects choice ID 11 as their third choice

(8, 12, 1),  -- User 8 selects choice ID 12 as their first choice
(8, 15, 2),  -- User 8 selects choice ID 15 as their second choice
(8, 11, 3),  -- User 8 selects choice ID 11 as their third choice

(15, 14, 1), -- User 15 selects choice ID 14 as their first choice
(15, 11, 2), -- User 15 selects choice ID 11 as their second choice
(15, 13, 3),  -- User 15 selects choice ID 13 as their third choice

(5, 16, 1),  -- User 5 selects choice ID 16 as their first choice
(5, 17, 2),  -- User 5 selects choice ID 17 as their second choice
(5, 18, 3),  -- User 5 selects choice ID 18 as their third choice

(13, 19, 1), -- User 13 selects choice ID 19 as their first choice
(13, 16, 2), -- User 13 selects choice ID 16 as their second choice
(13, 20, 3), -- User 13 selects choice ID 20 as their third choice

(19, 18, 1), -- User 19 selects choice ID 18 as their first choice
(19, 17, 2), -- User 19 selects choice ID 17 as their second choice
(19, 19, 3), -- User 19 selects choice ID 19 as their third choice

(4, 21, 1),  -- User 4 selects choice ID 21 as their first choice
(4, 22, 2),  -- User 4 selects choice ID 22 as their second choice
(4, 23, 3),  -- User 4 selects choice ID 23 as their third choice

(7, 24, 1),  -- User 7 selects choice ID 24 as their first choice
(7, 21, 2),  -- User 7 selects choice ID 21 as their second choice
(7, 25, 3),  -- User 7 selects choice ID 25 as their third choice

(10, 22, 1), -- User 10 selects choice ID 22 as their first choice
(10, 23, 2), -- User 10 selects choice ID 23 as their second choice
(10, 21, 3), -- User 10 selects choice ID 21 as their third choice

(15, 23, 1), -- User 15 selects choice ID 23 as their first choice
(15, 24, 2), -- User 15 selects choice ID 24 as their second choice
(15, 22, 3), -- User 15 selects choice ID 22 as their third choice

(17, 25, 1), -- User 17 selects choice ID 25 as their first choice
(17, 21, 2), -- User 17 selects choice ID 21 as their second choice
(17, 23, 3), -- User 17 selects choice ID 23 as their third choice

(18, 24, 1), -- User 18 selects choice ID 24 as their first choice
(18, 22, 2), -- User 18 selects choice ID 22 as their second choice
(18, 25, 3),  -- User 18 selects choice ID 25 as their third choice

(3, 26, 1),  -- User 3 selects choice ID 26 as their first choice
(3, 27, 2),  -- User 3 selects choice ID 27 as their second choice
(3, 28, 3),  -- User 3 selects choice ID 28 as their third choice

(9, 29, 1),  -- User 9 selects choice ID 29 as their first choice
(9, 26, 2),  -- User 9 selects choice ID 26 as their second choice
(9, 30, 3),  -- User 9 selects choice ID 30 as their third choice

(14, 27, 1), -- User 14 selects choice ID 27 as their first choice
(14, 28, 2), -- User 14 selects choice ID 28 as their second choice
(14, 29, 3), -- User 14 selects choice ID 29 as their third choice

(20, 30, 1), -- User 20 selects choice ID 30 as their first choice
(20, 28, 2), -- User 20 selects choice ID 28 as their second choice
(20, 26, 3),  -- User 20 selects choice ID 26 as their third choice

(2, 31, 1),  -- User 2 selects choice ID 31 as their first choice
(2, 32, 2),  -- User 2 selects choice ID 32 as their second choice
(2, 33, 3),  -- User 2 selects choice ID 33 as their third choice

(11, 34, 1), -- User 11 selects choice ID 34 as their first choice
(11, 31, 2), -- User 11 selects choice ID 31 as their second choice
(11, 35, 3), -- User 11 selects choice ID 35 as their third choice

(16, 32, 1), -- User 16 selects choice ID 32 as their first choice
(16, 33, 2), -- User 16 selects choice ID 33 as their second choice
(16, 31, 3), -- User 16 selects choice ID 31 as their third choice

(18, 35, 1), -- User 18 selects choice ID 35 as their first choice
(18, 34, 2), -- User 18 selects choice ID 34 as their second choice
(18, 33, 3), -- User 18 selects choice ID 33 as their third choice

(23, 31, 1), -- User 23 selects choice ID 31 as their first choice
(23, 35, 2), -- User 23 selects choice ID 35 as their second choice
(23, 34, 3),  -- User 23 selects choice ID 34 as their third choice

(1, 36, 1),  -- User 1 selects choice ID 36 as their first choice
(1, 37, 2),  -- User 1 selects choice ID 37 as their second choice
(1, 38, 3),  -- User 1 selects choice ID 38 as their third choice

(8, 39, 1),  -- User 8 selects choice ID 39 as their first choice
(8, 36, 2),  -- User 8 selects choice ID 36 as their second choice
(8, 40, 3),  -- User 8 selects choice ID 40 as their third choice

(12, 37, 1), -- User 12 selects choice ID 37 as their first choice
(12, 38, 2), -- User 12 selects choice ID 38 as their second choice
(12, 39, 3), -- User 12 selects choice ID 39 as their third choice

(21, 40, 1), -- User 21 selects choice ID 40 as their first choice
(21, 36, 2), -- User 21 selects choice ID 36 as their second choice
(21, 37, 3),  -- User 21 selects choice ID 37 as their third choice

(6, 41, 1),  -- User 6 selects choice ID 41 as their first choice
(6, 42, 2),  -- User 6 selects choice ID 42 as their second choice
(6, 43, 3),  -- User 6 selects choice ID 43 as their third choice

(10, 44, 1), -- User 10 selects choice ID 44 as their first choice
(10, 41, 2), -- User 10 selects choice ID 41 as their second choice
(10, 45, 3), -- User 10 selects choice ID 45 as their third choice

(15, 42, 1), -- User 15 selects choice ID 42 as their first choice
(15, 43, 2), -- User 15 selects choice ID 43 as their second choice
(15, 41, 3), -- User 15 selects choice ID 41 as their third choice

(17, 43, 1), -- User 17 selects choice ID 43 as their first choice
(17, 44, 2), -- User 17 selects choice ID 44 as their second choice
(17, 42, 3), -- User 17 selects choice ID 42 as their third choice

(25, 45, 1), -- User 25 selects choice ID 45 as their first choice
(25, 41, 2), -- User 25 selects choice ID 41 as their second choice
(25, 44, 3),  -- User 25 selects choice ID 44 as their third choice

(5, 46, 1),  -- User 5 selects choice ID 46 as their first choice
(5, 47, 2),  -- User 5 selects choice ID 47 as their second choice
(5, 48, 3),  -- User 5 selects choice ID 48 as their third choice

(14, 49, 1), -- User 14 selects choice ID 49 as their first choice
(14, 46, 2), -- User 14 selects choice ID 46 as their second choice
(14, 50, 3), -- User 14 selects choice ID 50 as their third choice

(19, 47, 1), -- User 19 selects choice ID 47 as their first choice
(19, 48, 2), -- User 19 selects choice ID 48 as their second choice
(19, 46, 3), -- User 19 selects choice ID 46 as their third choice

(24, 50, 1), -- User 24 selects choice ID 50 as their first choice
(24, 49, 2), -- User 24 selects choice ID 49 as their second choice
(24, 47, 3), -- User 24 selects choice ID 47 as their third choice

(1, 51, 1),  -- User 1 selects choice ID 51 as their first choice
(1, 52, 2),  -- User 1 selects choice ID 52 as their second choice
(1, 53, 3),  -- User 1 selects choice ID 53 as their third choice

(3, 54, 1),  -- User 3 selects choice ID 54 as their first choice
(3, 51, 2),  -- User 3 selects choice ID 51 as their second choice
(3, 52, 3),  -- User 3 selects choice ID 52 as their third choice

(5, 52, 1),  -- User 5 selects choice ID 52 as their first choice
(5, 53, 2),  -- User 5 selects choice ID 53 as their second choice
(5, 54, 3),  -- User 5 selects choice ID 54 as their third choice

(10, 51, 1), -- User 10 selects choice ID 51 as their first choice
(10, 54, 2), -- User 10 selects choice ID 54 as their second choice
(10, 52, 3), -- User 10 selects choice ID 52 as their third choice

(14, 53, 1), -- User 14 selects choice ID 53 as their first choice
(14, 51, 2), -- User 14 selects choice ID 51 as their second choice
(14, 54, 3), -- User 14 selects choice ID 54 as their third choice

(18, 54, 1), -- User 18 selects choice ID 54 as their first choice
(18, 52, 2), -- User 18 selects choice ID 52 as their second choice
(18, 51, 3), -- User 18 selects choice ID 51 as their third choice

(20, 52, 1), -- User 20 selects choice ID 52 as their first choice
(20, 53, 2), -- User 20 selects choice ID 53 as their second choice
(20, 51, 3),  -- User 20 selects choice ID 51 as their third choice

(2, 55, 1),  -- User 2 selects choice ID 55 as their first choice
(2, 56, 2),  -- User 2 selects choice ID 56 as their second choice
(2, 57, 3),  -- User 2 selects choice ID 57 as their third choice

(6, 58, 1),  -- User 6 selects choice ID 58 as their first choice
(6, 55, 2),  -- User 6 selects choice ID 55 as their second choice
(6, 59, 3),  -- User 6 selects choice ID 59 as their third choice

(15, 60, 1), -- User 15 selects choice ID 60 as their first choice
(15, 57, 2), -- User 15 selects choice ID 57 as their second choice
(15, 55, 3),  -- User 15 selects choice ID 55 as their third choice

(4, 61, 1),  -- User 4 selects choice ID 61 as their first choice
(4, 62, 2),  -- User 4 selects choice ID 62 as their second choice
(4, 63, 3),  -- User 4 selects choice ID 63 as their third choice

(8, 62, 1),  -- User 8 selects choice ID 62 as their first choice
(8, 61, 2),  -- User 8 selects choice ID 61 as their second choice
(8, 63, 3),  -- User 8 selects choice ID 63 as their third choice

(17, 63, 1), -- User 17 selects choice ID 63 as their first choice
(17, 61, 2), -- User 17 selects choice ID 61 as their second choice
(17, 62, 3), -- User 17 selects choice ID 62 as their third choice

(19, 61, 1), -- User 19 selects choice ID 61 as their first choice
(19, 62, 2), -- User 19 selects choice ID 62 as their second choice
(19, 63, 3),  -- User 19 selects choice ID 63 as their third choice

(9, 64, 1),  -- User 9 selects choice ID 64 as their first choice
(9, 65, 2),  -- User 9 selects choice ID 65 as their second choice
(9, 66, 3),  -- User 9 selects choice ID 66 as their third choice

(11, 67, 1), -- User 11 selects choice ID 67 as their first choice
(11, 64, 2), -- User 11 selects choice ID 64 as their second choice
(11, 65, 3), -- User 11 selects choice ID 65 as their third choice

(12, 65, 1), -- User 12 selects choice ID 65 as their first choice
(12, 66, 2), -- User 12 selects choice ID 66 as their second choice
(12, 67, 3), -- User 12 selects choice ID 67 as their third choice

(22, 66, 1), -- User 22 selects choice ID 66 as their first choice
(22, 64, 2), -- User 22 selects choice ID 64 as their second choice
(22, 67, 3), -- User 22 selects choice ID 67 as their third choice

(24, 67, 1), -- User 24 selects choice ID 67 as their first choice
(24, 64, 2), -- User 24 selects choice ID 64 as their second choice
(24, 65, 3),  -- User 24 selects choice ID 65 as their third choice

(13, 68, 1),  -- User 13 selects choice ID 68 as their first choice
(13, 69, 2),  -- User 13 selects choice ID 69 as their second choice
(13, 70, 3),  -- User 13 selects choice ID 70 as their third choice

(21, 69, 1),  -- User 21 selects choice ID 69 as their first choice
(21, 68, 2),  -- User 21 selects choice ID 68 as their second choice
(21, 70, 3),  -- User 21 selects choice ID 70 as their third choice

(23, 70, 1),  -- User 23 selects choice ID 70 as their first choice
(23, 68, 2),  -- User 23 selects choice ID 68 as their second choice
(23, 69, 3),  -- User 23 selects choice ID 69 as their third choice

(25, 68, 1),  -- User 25 selects choice ID 68 as their first choice
(25, 70, 2),  -- User 25 selects choice ID 70 as their second choice
(25, 69, 3),  -- User 25 selects choice ID 69 as their third choice

(8, 69, 1),   -- User 8 selects choice ID 69 as their first choice
(8, 70, 2),   -- User 8 selects choice ID 70 as their second choice
(8, 68, 3),   -- User 8 selects choice ID 68 as their third choice

(3, 70, 1),   -- User 3 selects choice ID 70 as their first choice
(3, 68, 2),   -- User 3 selects choice ID 68 as their second choice
(3, 69, 3),    -- User 3 selects choice ID 69 as their third

(5, 71, 1),  -- User 5 selects choice ID 71 as their first choice
(5, 72, 2),  -- User 5 selects choice ID 72 as their second choice
(5, 73, 3),  -- User 5 selects choice ID 73 as their third choice

(15, 72, 1), -- User 15 selects choice ID 72 as their first choice
(15, 71, 2), -- User 15 selects choice ID 71 as their second choice
(15, 73, 3), -- User 15 selects choice ID 73 as their third choice

(24, 73, 1), -- User 24 selects choice ID 73 as their first choice
(24, 71, 2), -- User 24 selects choice ID 71 as their second choice
(24, 72, 3),  -- User 24 selects choice ID 72 as their third choice

(6, 74, 1),  -- User 6 selects choice ID 74 as their first choice
(6, 75, 2),  -- User 6 selects choice ID 75 as their second choice
(6, 76, 3),  -- User 6 selects choice ID 76 as their third choice

(18, 75, 1), -- User 18 selects choice ID 75 as their first choice
(18, 74, 2), -- User 18 selects choice ID 74 as their second choice
(18, 76, 3), -- User 18 selects choice ID 76 as their third choice

(7, 76, 1),  -- User 7 selects choice ID 76 as their first choice
(7, 74, 2),  -- User 7 selects choice ID 74 as their second choice
(7, 75, 3),  -- User 7 selects choice ID 75 as their third choice

(12, 74, 1), -- User 12 selects choice ID 74 as their first choice
(12, 76, 2), -- User 12 selects choice ID 76 as their second choice
(12, 75, 3), -- User 12 selects choice ID 75 as their third choice

(20, 75, 1), -- User 20 selects choice ID 75 as their first choice
(20, 76, 2), -- User 20 selects choice ID 76 as their second choice
(20, 74, 3),  -- User 20 selects choice ID 74 as their third choice

(10, 77, 1),  -- User 10 selects choice ID 77 as their first choice
(10, 78, 2),  -- User 10 selects choice ID 78 as their second choice
(10, 79, 3),  -- User 10 selects choice ID 79 as their third choice

(16, 78, 1),  -- User 16 selects choice ID 78 as their first choice
(16, 77, 2),  -- User 16 selects choice ID 77 as their second choice
(16, 79, 3),  -- User 16 selects choice ID 79 as their third choice

(4, 79, 1),   -- User 4 selects choice ID 79 as their first choice
(4, 77, 2),   -- User 4 selects choice ID 77 as their second choice
(4, 78, 3),   -- User 4 selects choice ID 78 as their third choice

(11, 77, 1),  -- User 11 selects choice ID 77 as their first choice
(11, 78, 2),  -- User 11 selects choice ID 78 as their second choice
(11, 79, 3),   -- User 11 selects choice ID 79 as their third choice

(1, 80, 1),  -- User 1 selects choice ID 80 as their first choice
(1, 81, 2),  -- User 1 selects choice ID 81 as their second choice
(1, 82, 3),  -- User 1 selects choice ID 82 as their third choice

(3, 81, 1),  -- User 3 selects choice ID 81 as their first choice
(3, 82, 2),  -- User 3 selects choice ID 82 as their second choice
(3, 80, 3),  -- User 3 selects choice ID 80 as their third choice

(25, 82, 1), -- User 25 selects choice ID 82 as their first choice
(25, 80, 2), -- User 25 selects choice ID 80 as their second choice
(25, 81, 3), -- User 25 selects choice ID 81 as their third choice

(14, 83, 1),  -- User 14 selects choice ID 83 as their first choice
(14, 84, 2),  -- User 14 selects choice ID 84 as their second choice
(14, 85, 3),  -- User 14 selects choice ID 85 as their third choice

(18, 84, 1),  -- User 18 selects choice ID 84 as their first choice
(18, 85, 2),  -- User 18 selects choice ID 85 as their second choice
(18, 83, 3),  -- User 18 selects choice ID 83 as their third choice

(9, 85, 1),   -- User 9 selects choice ID 85 as their first choice
(9, 83, 2),   -- User 9 selects choice ID 83 as their second choice
(9, 84, 3),   -- User 9 selects choice ID 84 as their third choice

(6, 83, 1),   -- User 6 selects choice ID 83 as their first choice
(6, 84, 2),   -- User 6 selects choice ID 84 as their second choice
(6, 85, 3),   -- User 6 selects choice ID 85 as their third choice

(25, 84, 1),  -- User 25 selects choice ID 84 as their first choice
(25, 85, 2),  -- User 25 selects choice ID 85 as their second choice
(25, 83, 3),  -- User 25 selects choice ID 83 as their third choice

(11, 85, 1),  -- User 11 selects choice ID 85 as their first choice
(11, 83, 2),  -- User 11 selects choice ID 83 as their second choice
(11, 84, 3),  -- User 11 selects choice ID 84 as their third choice

(17, 83, 1),  -- User 17 selects choice ID 83 as their first choice
(17, 84, 2),  -- User 17 selects choice ID 84 as their second choice
(17, 85, 3),  -- User 17 selects choice ID 85 as their third choice

(5, 85, 1),   -- User 5 selects choice ID 85 as their first choice
(5, 84, 2),   -- User 5 selects choice ID 84 as their second choice
(5, 83, 3),    -- User 5 selects choice ID 83 as their third choice

(2, 86, 1),   -- User 2 selects choice ID 86 as their first choice
(2, 87, 2),   -- User 2 selects choice ID 87 as their second choice
(2, 88, 3),   -- User 2 selects choice ID 88 as their third choice

(8, 87, 1),   -- User 8 selects choice ID 87 as their first choice
(8, 86, 2),   -- User 8 selects choice ID 86 as their second choice
(8, 88, 3),   -- User 8 selects choice ID 88 as their third choice

(14, 88, 1),  -- User 14 selects choice ID 88 as their first choice
(14, 86, 2),  -- User 14 selects choice ID 86 as their second choice
(14, 87, 3),  -- User 14 selects choice ID 87 as their third choice

(10, 86, 1),  -- User 10 selects choice ID 86 as their first choice
(10, 88, 2),  -- User 10 selects choice ID 88 as their second choice
(10, 87, 3),  -- User 10 selects choice ID 87 as their third choice

(12, 87, 1),  -- User 12 selects choice ID 87 as their first choice
(12, 88, 2),  -- User 12 selects choice ID 88 as their second choice
(12, 86, 3),  -- User 12 selects choice ID 86 as their third choice

(25, 86, 1),  -- User 25 selects choice ID 86 as their first choice
(25, 87, 2),  -- User 25 selects choice ID 87 as their second choice
(25, 88, 3),   -- User 25 selects choice ID 88 as their third choice

(7, 89, 1),   -- User 7 selects choice ID 89 as their first choice
(7, 90, 2),   -- User 7 selects choice ID 90 as their second choice
(7, 91, 3),   -- User 7 selects choice ID 91 as their third choice

(13, 90, 1),  -- User 13 selects choice ID 90 as their first choice
(13, 89, 2),  -- User 13 selects choice ID 89 as their second choice
(13, 91, 3),  -- User 13 selects choice ID 91 as their third choice

(1, 91, 1),   -- User 1 selects choice ID 91 as their first choice
(1, 89, 2),   -- User 1 selects choice ID 89 as their second choice
(1, 90, 3),   -- User 1 selects choice ID 90 as their third choice

(24, 90, 1),  -- User 24 selects choice ID 90 as their first choice
(24, 91, 2),  -- User 24 selects choice ID 91 as their second choice
(24, 89, 3),  -- User 24 selects choice ID 89 as their third choice

(5, 91, 1),   -- User 5 selects choice ID 91 as their first choice
(5, 90, 2),   -- User 5 selects choice ID 90 as their second choice
(5, 89, 3),    -- User 5 selects choice ID 89 as their third choice

(15, 92, 1),  -- User 15 selects choice ID 92 as their first choice
(15, 93, 2),  -- User 15 selects choice ID 93 as their second choice
(15, 94, 3),  -- User 15 selects choice ID 94 as their third choice

(17, 94, 1),  -- User 17 selects choice ID 94 as their first choice
(17, 92, 2),  -- User 17 selects choice ID 92 as their second choice
(17, 93, 3),  -- User 17 selects choice ID 93 as their third choice

(20, 93, 1),  -- User 20 selects choice ID 93 as their first choice
(20, 92, 2),  -- User 20 selects choice ID 92 as their second choice
(20, 94, 3),  -- User 20 selects choice ID 94 as their third choice

(22, 92, 1),  -- User 22 selects choice ID 92 as their first choice
(22, 93, 2),  -- User 22 selects choice ID 93 as their second choice
(22, 94, 3),  -- User 22 selects choice ID 94 as their third choice

(12, 94, 1),  -- User 12 selects choice ID 94 as their first choice
(12, 93, 2),  -- User 12 selects choice ID 93 as their second choice
(12, 92, 3),  -- User 12 selects choice ID 92 as their third choice

(4, 93, 1),   -- User 4 selects choice ID 93 as their first choice
(4, 94, 2),   -- User 4 selects choice ID 94 as their second choice
(4, 92, 3),    -- User 4 selects choice ID 92 as their third choice

(1, 95, 1),   -- User 1 selects choice ID 95 as their first choice
(1, 96, 2),   -- User 1 selects choice ID 96 as their second choice
(1, 97, 3),   -- User 1 selects choice ID 97 as their third choice

(5, 96, 1),   -- User 5 selects choice ID 96 as their first choice
(5, 95, 2),   -- User 5 selects choice ID 95 as their second choice
(5, 97, 3),   -- User 5 selects choice ID 97 as their third choice

(25, 97, 1),  -- User 25 selects choice ID 97 as their first choice
(25, 95, 2),  -- User 25 selects choice ID 95 as their second choice
(25, 96, 3),   -- User 25 selects choice ID 96 as their third choice

(2, 98, 1),   -- User 2 selects choice ID 98 as their first choice
(2, 99, 2),   -- User 2 selects choice ID 99 as their second choice
(2, 100, 3),  -- User 2 selects choice ID 100 as their third choice

(8, 99, 1),   -- User 8 selects choice ID 99 as their first choice
(8, 100, 2),  -- User 8 selects choice ID 100 as their second choice
(8, 98, 3),   -- User 8 selects choice ID 98 as their third choice

(22, 100, 1), -- User 22 selects choice ID 100 as their first choice
(22, 98, 2),  -- User 22 selects choice ID 98 as their second choice
(22, 99, 3),  -- User 22 selects choice ID 99 as their third choice

(12, 98, 1),  -- User 12 selects choice ID 98 as their first choice
(12, 99, 2),  -- User 12 selects choice ID 99 as their second choice
(12, 100, 3), -- User 12 selects choice ID 100 as their third choice

(14, 99, 1),  -- User 14 selects choice ID 99 as their first choice
(14, 100, 2), -- User 14 selects choice ID 100 as their second choice
(14, 98, 3);   -- User 14 selects choice ID 98 as their third choice
