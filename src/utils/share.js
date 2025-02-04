export const shareConversation = (conversationId) => {
    const shareableLink = `${window.location.origin}/conversation/${conversationId}`;
    navigator.clipboard.writeText(shareableLink);
    alert('Conversation link copied to clipboard!');
  };
  