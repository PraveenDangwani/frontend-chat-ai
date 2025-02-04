# Chat Application

## How to Start the Service and Use the Application

1. **Clone the Repository:**  
   ```bash
   git clone https://github.com/your-repository/chat-application.git
   cd chat-application
   ```

2. **Install Dependencies:**  
   ```bash
   npm install
   ```

3. **Start the Application:**  
   ```bash
   npm start
   ```

4. **Access the App:**  
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Using the Application:**
   - Start a new chat by clicking the **"+ New Chat"** button in the sidebar.
   - Send messages and receive AI responses.
   - Provide feedback (👍/👎) on AI messages.
   - End the conversation and provide ratings/comments.
   - View chat history in the sidebar and reload conversations.
   - Switch between **Dark Mode/Light Mode** using the toggle button.
   

## Reasoning Behind Technical Choices

- **React & Redux:** For a responsive, component-based UI and efficient state management.
- **CSS Flexbox & Responsive Design:** Ensures adaptability across devices.
- **Local Storage (Optional for Data Persistence):** For simple persistence of conversations.
- **Dynamic Theme Switching:** Implemented to enhance user accessibility and preference.

## Reasoning Behind Design Choices

- **Sidebar for Chat History:** Inspired by ChatGPT’s UI, it provides quick access to past conversations.
- **Floating Feedback Buttons:** Minimalist design with feedback buttons visible only on hover.
- **Rating and Comments:** Collects qualitative and quantitative feedback post-conversation.
- **Theme Toggle Placement:** Located at the bottom of the sidebar for better UI consistency.

## Trade-offs, Limitations, and Future Improvements

### Trade-offs:
- **Local State Management:** Opted for simplicity over complex backend integration.


### Limitations:
- No backend to handle real-time data synchronization.


### Future Improvements:
- **Backend Integration:** For secure data storage and real-time updates.
- **User Authentication:** To allow personalized chat history.
- **Rich Text Support:** For more interactive AI responses.
- **Advanced Sharing Options:** Like exporting conversations as PDF or sending via email.



