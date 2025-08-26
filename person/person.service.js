var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
import { Injectable, NotFoundException } from '@nestjs/common';
let PersonService = (() => {
    let _classDecorators = [Injectable()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var PersonService = _classThis = class {
        constructor(personModel) {
            this.personModel = personModel;
        }
        // Find cousins of a person by id_number
        async findCousins(id_number) {
            // 1. Find person by id_number
            const person = await this.personModel.findOne({ id_number });
            if (!person)
                return [];
            // 2. Find parents' siblings (aunts/uncles)
            // First find parents' id_numbers
            const mother = person.mother_id ? await this.personModel.findById(person.mother_id) : null;
            const father = person.father_id ? await this.personModel.findById(person.father_id) : null;
            // Parents' siblings = persons with same mother_id or father_id as person's parents
            // For mother: siblings share mother's parents
            // For father: siblings share father's parents
            // Helper: get siblings of a parent
            const getSiblings = async (parent) => {
                if (!parent)
                    return [];
                if (!parent.mother_id && !parent.father_id)
                    return []; // no grandparents info, no siblings found
                return this.personModel.find({
                    $and: [
                        { _id: { $ne: parent.id_number } }, // exclude the parent itself
                        {
                            $or: [
                                { mother_id: parent.mother_id || null },
                                { father_id: parent.father_id || null },
                            ],
                        },
                    ],
                });
            };
            const motherSiblings = await getSiblings(mother);
            const fatherSiblings = await getSiblings(father);
            // 3. Find children of these aunts/uncles => cousins
            const auntUncleIds = [...motherSiblings, ...fatherSiblings].map((p) => p._id);
            const cousins = await this.personModel.find({
                $or: [
                    { mother_id: { $in: auntUncleIds } },
                    { father_id: { $in: auntUncleIds } },
                ],
            });
            return cousins;
        }
        async getPersonWithChildren(id_number) {
            const person = await this.personModel.findOne({ id_number }).lean();
            if (!person) {
                throw new NotFoundException("Person not found");
            }
            let childrenQuery = {};
            if (person.gender === "female") {
                childrenQuery = { mother_id: person.id_number };
            }
            else if (person.gender === "male") {
                childrenQuery = { father_id: person.id_number };
            }
            else {
                person.children = [];
                return person;
            }
            const children = await this.personModel.find(childrenQuery).lean();
            person.children = children || [];
            return person;
        }
    };
    __setFunctionName(_classThis, "PersonService");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PersonService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PersonService = _classThis;
})();
export { PersonService };
