// JSON Data (Provided)
const projectData = {
  title: "Technical Project Management",
  tasks: [
    {
      task_id: 18882,
      task_title: "Explore the world of management",
      task_description:
        "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
      assets: [
        {
          asset_id: 18883,
          asset_title: "Technical Project Management",
          asset_description:
            "Story of Alignment Scope of Agility Specific Accountable Staggering Approach",
          asset_content: "https://www.youtube.com/embed/TiMRwri1xJ8",
          asset_type: "display_asset",
          asset_content_type: "video",
        },
        {
          asset_id: 18884,
          asset_title: "Threadbuild",
          asset_description:
            "Watch the video and thread build, joy out key threads while watching that video.",
          asset_content: "",
          asset_type: "input_asset",
          asset_content_type: "threadbuilder",
        },
        {
          asset_id: 18885,
          asset_title: "Structure your pointers",
          asset_description:
            "Write a 400-500 word article from your thread. Publish your understanding, and showcase your learning to the entire world.",
          asset_content: "",
          asset_type: "input_asset",
          asset_content_type: "article",
        },
        {
          asset_id: 18886,
          asset_title: "4SA Method",
          asset_description: "To explore more, read more.",
          asset_content: "",
          asset_type: "display_asset",
          asset_content_type: "article",
        },
      ],
    },
  ],
};

//added
// Reusable Function for Asset Container
function createAssetContainer(asset, index) {
  return `
    <div class="asset" id="asset-${index}">
      <h3 class="asset-title">${asset.asset_title}</h3>
      <p class="description"><strong>Description:</strong> ${
        asset.asset_description
      }</p>
      ${
        asset.asset_content_type === "video"
          ? `<iframe src="${asset.asset_content}" width="100%" height="200px"></iframe>`
          : `<p class="content"><strong>Content:</strong> ${
              asset.asset_content || "No content available"
            }</p>`
      }
    </div>
  `;
}

// Render the Project Data
function renderProject(data) {
  const container = document.getElementById("project-container");
  let html = `<div class="heading-container">
      <h1 class="project-title">${data.title}</h1>
      <button class="submit-btn">Submit Task</button>
    </div>`;

  data.tasks.forEach((task) => {
    html += `
    <div class="main-container">
        <div class="task-container">
            <h2>${task.task_title}</h2>
            <p>${task.task_description}</p>
        </div>
        <div class="assets-grid">
            ${task.assets
              .map((asset, index) => createAssetContainer(asset, index))
              .join("")}
         </div>
    </div>`;
  });
  container.innerHTML = html;

  // Add Extra Components Below the 2nd Asset
  const secondAsset = document.getElementById("asset-1"); // Target the second asset (index 1)
  if (secondAsset) {
    const extraComponents = document.createElement("div");
    extraComponents.innerHTML = `
      <div class="thread-header">
      <img src="images/up.png" alt="Icon" class="thread-icon" />
      <p class="thread-title">Thread A</p>
    </div>
    <div class="thread-columns">
      <div class="thread-column">
        <p class="thread-label">Sub Thread 1</p>
        <textarea placeholder="Enter Text Here" class="thread-textarea"></textarea>
      </div>
      <div class="thread-column">
        <p class="thread-label">Sub Interpretation 1</p>
        <textarea placeholder="Enter Text Here" class="thread-textarea"></textarea>
      </div>
    </div>
    <div class="thread-actions">
      <div class="thread-icons">
        <img src="images/icon1.png" alt="Icon 1" class="action-icon" />
        <img src="images/icon2.png" alt="Icon 2" class="action-icon" />
        <img src="images/icon3.png" alt="Icon 3" class="action-icon" />
        <img src="images/icon4.png" alt="Icon 4" class="action-icon" />
      </div>
      <div class="thread-select">
        <p class="select-label">Select Category</p>
        <img src="images/down.png" alt="Category Icon" class="select-icon" />
      </div>
      <div class="thread-select">
        <p class="select-label">Select Process</p>
        <img src="images/down.png" alt="Process Icon" class="select-icon" />
      </div>
    </div>
    <button class="add-thread-btn">+ Sub thread</button>
    <div class="thread-summary">
      <p class="summary-label">Summary for Thread A</p>
      <textarea placeholder="Enter Text Here" class="summary-textarea"></textarea>
    </div>
    `;
    secondAsset.appendChild(extraComponents); 
  }

  // Add Extra Components Below the 3rd Asset
  const thirdAsset = document.getElementById("asset-2"); 
  if (thirdAsset) {
    const extraComponents = document.createElement("div");
    extraComponents.innerHTML = `
     <div class="editor-container">
      <!-- Title Section -->
      <div class="editor-title">
        <p class="label">Title</p>
        <input type="text" class="title-input" />
      </div>

      <!-- Content Section -->
      <div class="editor-content">
        <p class="label">Content</p>
        <div class="content-border">
        <div class="toolbar">
          <p class="toolbar-options">File</p>
          <p class="toolbar-options">Edit</p>
          <p class="toolbar-options">View</p>
          <p class="toolbar-options">Insert</p>
          <p class="toolbar-options">Format</p>
          <p class="toolbar-options">Tools</p>
          <p class="toolbar-options">Table</p>
          <p class="toolbar-options">Help</p>
        </div>
        <div class="formatting-bar">
          <div class="formatting-icons">
            <img src="images/tool1.png" alt="Icon 1" class="format-icon" />
            <img src="images/tool2.png" alt="Icon 2" class="format-icon" />
            <img src="images/tool3.png" alt="Icon 3" class="format-icon" />
            </div>
          <div class="paragraph-section">
            <p class="paragraph-text">Paragraph</p>
            <img src="images/down.png" alt="Paragraph Icon" class="paragraph-icon" />
          </div>
          <img src="images/tool5.png" alt="Additional Icon" class="additional-icon" />
        </div>
        <textarea class="content-textarea"></textarea>
      </div>
    </div>
    </div>
    `;
    thirdAsset.appendChild(extraComponents); 
  }

  // Add Extra Components Below the 4th Asset
  const forthAsset = document.getElementById("asset-3"); 
  if (forthAsset) {
    const extraComponents = document.createElement("div");
    extraComponents.innerHTML = `
     <!-- Introduction Section -->
    <div class="introduction-section">
    <div class= "heading"> 
      <img src="images/up.png" alt="Icon" class="intro-icon" />
      <span class="intro-title">Introduction</span>
    </div>
      <p class="intro-paragraph">The 4SA Method, How to bring idea into process?</p>
      <p class="see-more">See More</p>
    </div>

    <!-- Thread A Section -->
    <div class="thread-section" style="margin-top: 20px;">
      <div class= "heading"> 
        <img src="images/up.png" alt="Icon" class="thread-icon" />
        <span class="thread-title">Thread A</span>
      </div>
      <p class="thread-paragraph">How are you going to develop your strategy? Which method are you going to use to develop a strategy? What if the project is lengthy?</p>
      <p class="see-more">See More</p>
      
      <!-- Example Section -->
      <div class="example-section" style="margin-left: 20px; padding-top: 10px;">
        <span class="example-title">Example 1</span>
        <p class="example-paragraph">You have a concept, how will you put it into progress? To turn an idea into action, I would begin by outlining clear goals and creating a roadmap. Using the SMART method (Specific, Measurable, Achievable, Relevant, Time-bound) ensures a focused and actionable plan. For lengthy projects, I would divide the work into smaller milestones, allowing for better progress tracking and timely adjustments. Regular evaluations and flexibility in adapting to challenges help maintain momentum and ensure the concept evolves into a successful outcome. Additionally, collaboration and resource management play a critical role in bringing the concept to life. Engaging with the right team members, stakeholders, or experts ensures diverse perspectives and efficient execution. For a lengthy project, adopting an agile approach can be beneficial, allowing iterative progress and continuous feedback to refine the process. Effective communication, coupled with the use of tools like project management software, keeps everyone aligned with the goals, ensuring the concept progresses systematically toward completion.</p>
      </div>
    </div>
    `;
    forthAsset.appendChild(extraComponents); 
  }
}

// Initialize the Page
renderProject(projectData);

// Select the sidebar and toggle button
const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggle-btn");

// Add event listener to toggle button
toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});
