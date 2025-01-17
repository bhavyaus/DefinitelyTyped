// Type definitions for mongoose-simple-random 0.4
// Project: https://github.com/larryprice/mongoose-simple-random
// Definitions by: TypeScript Bot <https://github.com/typescript-bot>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.1

import mongoose = require("mongoose");
declare function pluginFunc(schema: mongoose.Schema): void;
declare namespace pluginFunc {}
export = pluginFunc;

declare module "mongoose" {
    interface Model<T> extends NodeJS.EventEmitter {
        findRandom(
            conditions: Object,
            projection?: Object | null,
            options?: Object | null,
            callback?: (err: any, res?: T[]) => void,
        ): void;
    }
}
