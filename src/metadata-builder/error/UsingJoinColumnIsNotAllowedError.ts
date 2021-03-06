import {EntityMetadata} from "../../metadata/EntityMetadata";
import {RelationMetadata} from "../../metadata/RelationMetadata";

/**
 * @internal
 */
export class UsingJoinColumnIsNotAllowedError extends Error {
    name = "UsingJoinColumnIsNotAllowedError";

    constructor(entityMetadata: EntityMetadata, relation: RelationMetadata) {
        super();
        this.message = `Using JoinColumn on ${entityMetadata.name}#${relation.propertyName} is wrong. ` + 
            `You can use JoinColumn only on one-to-one and many-to-one relations.`;
    }

}