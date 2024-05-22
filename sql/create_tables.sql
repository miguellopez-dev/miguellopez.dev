CREATE TABLE Projects (
    ProjectID INT AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    Description TEXT,
    ImageUrl VARCHAR(255),
    VideoUrl VARCHAR(255),
    LiveUrl VARCHAR(255),
    GithubUrl VARCHAR(255)
);

CREATE TABLE Technologies (
    TechnologyID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(50) NOT NULL
);

CREATE TABLE ProjectTechnologies (
    ProjectID INT,
    TechnologyID INT,
    FOREIGN KEY (ProjectID) REFERENCES Projects(ProjectID),
    FOREIGN KEY (TechnologyID) REFERENCES Technologies(TechnologyID),
    PRIMARY KEY (ProjectID, TechnologyID)
);
