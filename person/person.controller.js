var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
// src/person/person.controller.ts
import { Controller, Get, Post, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation, ApiParam } from '@nestjs/swagger';
let PersonController = (() => {
    let _classDecorators = [ApiTags('Persons'), Controller('api/persons')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _addPerson_decorators;
    let _getPersons_decorators;
    let _getChildren_decorators;
    let _getCousins_decorators;
    let _getPersonWithChildren_decorators;
    var PersonController = _classThis = class {
        constructor(personModel, personService) {
            this.personModel = (__runInitializers(this, _instanceExtraInitializers), personModel);
            this.personService = personService;
        }
        async addPerson(personDto) {
            try {
                const createdPerson = new this.personModel(personDto);
                return await createdPerson.save();
            }
            catch (e) {
                console.error('Add person error:', e); // <-- add this line
                throw new HttpException('Failed to add person', HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        async getPersons() {
            try {
                return await this.personModel.find().exec();
            }
            catch {
                throw new HttpException('Failed to fetch persons', HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        async getChildren(parentId) {
            try {
                return await this.personModel.find({
                    $or: [{ mother_id: parentId }, { father_id: parentId }],
                });
            }
            catch {
                throw new HttpException('Failed to fetch children', HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        async getCousins(id_number) {
            return this.personService.findCousins(id_number);
        }
        async getPersonWithChildren(id) {
            return this.personService.getPersonWithChildren(id);
        }
    };
    __setFunctionName(_classThis, "PersonController");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _addPerson_decorators = [Post(), ApiOperation({ summary: 'Add a new person' }), ApiResponse({ status: 201, description: 'Person created successfully.' }), ApiResponse({ status: 500, description: 'Failed to add person' })];
        _getPersons_decorators = [Get(), ApiOperation({ summary: 'Get all persons' }), ApiResponse({ status: 200, description: 'List of persons' }), ApiResponse({ status: 500, description: 'Failed to fetch persons' })];
        _getChildren_decorators = [Get('children/:parentId'), ApiOperation({ summary: 'Get children by parent ID' }), ApiParam({ name: 'parentId', required: true, description: "The parent's ID" }), ApiResponse({ status: 200, description: 'List of children' }), ApiResponse({ status: 500, description: 'Failed to fetch children' })];
        _getCousins_decorators = [Get('cousins/:id_number'), ApiOperation({ summary: 'Get cousins by person id_number' }), ApiParam({ name: 'id_number', required: true, description: 'The id_number of the person' }), ApiResponse({ status: 200, description: 'List of cousins' }), ApiResponse({ status: 404, description: 'Person not found' }), ApiResponse({ status: 500, description: 'Failed to fetch cousins' }), Get('cousins/:id_number')];
        _getPersonWithChildren_decorators = [Get(":id/with-children"), ApiOperation({ summary: "Get a person and their children" }), ApiParam({
                name: "id",
                required: true,
                description: "The MongoDB ObjectId of the person",
            }), ApiResponse({
                status: 200,
                description: "Person with their children",
                schema: {
                    example: {
                        person: {
                            _id: "64fabc1234567890abcdef12",
                            name: "Alice",
                            gender: "female",
                            id_number: "369777888653339",
                        },
                        children: [
                            {
                                _id: "64fabc1234567890abcdef34",
                                name: "Bob",
                                gender: "male",
                                id_number: "847263847263847",
                            },
                        ],
                    },
                },
            }), ApiResponse({ status: 404, description: "Person not found" }), ApiResponse({ status: 500, description: "Failed to fetch person with children" }), Get(":id/with-children")];
        __esDecorate(_classThis, null, _addPerson_decorators, { kind: "method", name: "addPerson", static: false, private: false, access: { has: obj => "addPerson" in obj, get: obj => obj.addPerson }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getPersons_decorators, { kind: "method", name: "getPersons", static: false, private: false, access: { has: obj => "getPersons" in obj, get: obj => obj.getPersons }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getChildren_decorators, { kind: "method", name: "getChildren", static: false, private: false, access: { has: obj => "getChildren" in obj, get: obj => obj.getChildren }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getCousins_decorators, { kind: "method", name: "getCousins", static: false, private: false, access: { has: obj => "getCousins" in obj, get: obj => obj.getCousins }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getPersonWithChildren_decorators, { kind: "method", name: "getPersonWithChildren", static: false, private: false, access: { has: obj => "getPersonWithChildren" in obj, get: obj => obj.getPersonWithChildren }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PersonController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PersonController = _classThis;
})();
export { PersonController };
