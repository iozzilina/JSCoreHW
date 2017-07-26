class MailBox{

    constructor(){
        this.messages = [];
    }

    //adds a mail message to the mail box. 
    //Both subject and text are strings. 
    //Returns the mailbox itself to allow chaining.
    addMessage(subjectStr, textStr){
        let msg = {subject: subjectStr, text:textStr};
        this.messages.push(msg);
        return this;
    }

    //returns the total number of messages in the mail box.
    get messageCount(){
        return this.messages.length;
    }

    //clears the mail box (deletes all messages).
    deleteAllMessages() {
        this.messages.length = 0;
    }

    //returns all mail messages from the mail box that hold the specified substr string in their subject. 
    //Order the results by their order of adding to the mail box. 
    //Return the results as array of objects {subject, text}. 
    //If no messages are matched, return an empty array.
    findBySubject(substr) {
        let result = this.messages.filter(m=>m.subject.includes(substr));
        return result;
    }

    //returns the text representation of the mail box in the following format:
    //* (empty mailbox)

    //* [subject1] Text1
    //* [subject2] Text2
    //* [subject3] Text3

    toString() {
        if(this.messageCount ==0){
            return ` * (empty mailbox)`;
        } 

        let result = '';
        for(let msg of this.messages){
            result +=` * [${msg.subject}] ${msg.text}\n`;
        }
        return result;
    }
}


let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));
mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("New mailbox:\n" +
    new MailBox()
        .addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());

