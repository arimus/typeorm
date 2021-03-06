import {ReactiveRepository} from "./ReactiveRepository";
import {TreeRepository} from "./TreeRepository";
import {QueryBuilder} from "../query-builder/QueryBuilder";
import * as Rx from "rxjs/Rx";

/**
 * Tree repository is supposed to work with your entity objects. Find entities, insert, update, delete, etc.
 * This version of TreeRepository is using rxjs library and Observables instead of promises.
 */
export class TreeReactiveRepository<Entity> extends ReactiveRepository<Entity> {

    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------

    constructor(protected repository: TreeRepository<Entity>) {
        super(repository);
    }
    
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------

    /**
     * Roots are entities that have no ancestors. Finds them all.
     */
    findRoots(): Rx.Observable<Entity[]> {
        return Rx.Observable.fromPromise(this.repository.findRoots());
    }

    /**
     * Creates a query builder used to get descendants of the entities in a tree.
     */
    createDescendantsQueryBuilder(alias: string, closureTableAlias: string, entity: Entity): QueryBuilder<Entity> {
        return this.repository.createDescendantsQueryBuilder(alias, closureTableAlias, entity);
    }

    /**
     * Gets all children (descendants) of the given entity. Returns them all in a flat array.
     */
    findDescendants(entity: Entity): Rx.Observable<Entity[]> {
        return Rx.Observable.fromPromise(this.repository.findDescendants(entity));
    }

    /**
     * Gets all children (descendants) of the given entity. Returns them in a tree - nested into each other.
     */
    findDescendantsTree(entity: Entity): Rx.Observable<Entity> {
        return Rx.Observable.fromPromise(this.repository.findDescendantsTree(entity));
    }

    /**
     * Gets number of descendants of the entity.
     */
    countDescendants(entity: Entity): Rx.Observable<number> {
        return Rx.Observable.fromPromise(this.repository.countDescendants(entity));
    }

    /**
     * Creates a query builder used to get ancestors of the entities in the tree.
     */
    createAncestorsQueryBuilder(alias: string, closureTableAlias: string, entity: Entity): QueryBuilder<Entity> {
        return this.repository.createAncestorsQueryBuilder(alias, closureTableAlias, entity);
    }

    /**
     * Gets all parents (ancestors) of the given entity. Returns them all in a flat array.
     */
    findAncestors(entity: Entity): Rx.Observable<Entity[]> {
        return Rx.Observable.fromPromise(this.repository.findAncestors(entity));
    }

    /**
     * Gets all parents (ancestors) of the given entity. Returns them in a tree - nested into each other.
     */
    findAncestorsTree(entity: Entity): Rx.Observable<Entity> {
        return Rx.Observable.fromPromise(this.repository.findAncestorsTree(entity));
    }

    /**
     * Gets number of ancestors of the entity.
     */
    countAncestors(entity: Entity): Rx.Observable<number> {
        return Rx.Observable.fromPromise(this.repository.countAncestors(entity));
    }

    /**
     * Moves entity to the children of then given entity.
     *
     move(entity: Entity, to: Entity): Rx.Observable<void> {
        return this.repository.move(entity, to);
    }
     */


}