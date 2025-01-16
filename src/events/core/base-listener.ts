import {Message, Stan} from 'node-nats-streaming';
import {Subjects} from '../dynamic/subjects';

interface Event {
    subject: Subjects;
    data: any;
}

export abstract class Listener<T extends Event> {
    abstract subject: T['subject'];
    abstract queueGroupName: string;

    abstract onMessage(data: T['data'], msg: Message): void;

    protected seconds = 30;
    private client: Stan;
    protected ackWait = this.seconds * 1000;

    constructor(client: Stan) {
        console.log(`Listener initialized with client: ${client}`);
        this.client = client;
    }

    subscriptionOptions() {
        console.log(`Setting subscription options for queue group: ${this.queueGroupName}`);
        return this.client
            .subscriptionOptions()
            .setDeliverAllAvailable()
            .setManualAckMode(true)
            .setAckWait(this.ackWait)
            .setDurableName(this.queueGroupName);
    }

    listen() {
        console.log(`Preparing to subscribe to subject: ${this.subject} in queue group: ${this.queueGroupName}`);
        const subscription = this.client.subscribe(
            this.subject,
            this.queueGroupName,
            this.subscriptionOptions()
        );

        console.log(`Listening for ${this.subject}`)

        subscription.on('message', (msg: Message) => {
            console.log(`Message received: ${this.subject} / ${this.queueGroupName}`);

            const parsedData = this.parseMessage(msg);
            console.log(`Processing message for subject: ${this.subject}`);
            this.onMessage(parsedData, msg);
            console.log(`Processed message for subject: ${this.subject}`);
            
        });
    }

    parseMessage(msg: Message) {
        const data = msg.getData();
        console.log(`Raw message data: ${data}`);
        console.log(typeof data === 'string'
            ? JSON.parse(data)
            : JSON.parse(data.toString('utf8')))
            
        return typeof data === 'string'
            ? JSON.parse(data)
            : JSON.parse(data.toString('utf8'));
    }
}
