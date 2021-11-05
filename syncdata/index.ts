import { AzureFunction, Context } from "@azure/functions"

const queueTrigger: AzureFunction = async function (context: Context, myQueueItem: string): Promise<void> {
    context.log('test deploy ->>>>>>>>>>>>>>>>>>>>>>>.', myQueueItem);
};

export default queueTrigger;
