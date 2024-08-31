import { DependencyContainer } from "tsyringe";
import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { DatabaseServer } from "@spt/servers/DatabaseServer";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { IDatabaseTables } from "@spt/models/spt/server/IDatabaseTables";
import { JsonUtil } from "@spt/utils/JsonUtil";

class ItemTextureKoreanChangePatcher implements IPostDBLoadMod 
{
    private db: IDatabaseTables;
    private logger: ILogger;
    private jsonUtil: JsonUtil;
    private modName: string = "ItemTextureKoreanChangePatcher";

    public postDBLoad(container: DependencyContainer): void 
    {
        this.logger = container.resolve<ILogger>("WinstonLogger");
        this.jsonUtil = container.resolve<JsonUtil>("JsonUtil");
        const databaseServer = container.resolve<DatabaseServer>("DatabaseServer");

        this.db = databaseServer.getTables();

        this.logger.info(`[${this.modName}] Item Texture Korean Change Patcher Loaded`);
    }
}

module.exports = { mod: new ItemTextureKoreanChangePatcher() }