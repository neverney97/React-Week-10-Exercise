import { create } from "zustand";
import { v4 as uuidv4} from "uuid";


// Set is zustand's internal function to update the store just like setState
const useMessagesStore = create((set) => ({
    // initial sate to store messages globally
    messages: [
        // An example message object
        {name: "John", email: "john@email.com", id: uuidv4()},
        {name: "paul", email: "paul@email.com", id: uuidv4()},
        {name: "peter", email: "peter@email.com", id: uuidv4()}
    ]

    // Function to add a new message to the store
    ,addNewMessage: (newMessage) => set((state) => ({
        messages: [...state.messages, {...newMessage,id:uuidv4()}]
    }))

}))

export default useMessagesStore;