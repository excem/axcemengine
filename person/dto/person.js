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
// src/person/dto/person.dto.ts
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AddressDto } from './address';
import { DocumentItemDto } from './document-item';
import { BusinessDto } from './business';
let PersonDto = (() => {
    var _a;
    let _name_decorators;
    let _name_initializers = [];
    let _name_extraInitializers = [];
    let _gender_decorators;
    let _gender_initializers = [];
    let _gender_extraInitializers = [];
    let _type_decorators;
    let _type_initializers = [];
    let _type_extraInitializers = [];
    let _age_decorators;
    let _age_initializers = [];
    let _age_extraInitializers = [];
    let _emoji_decorators;
    let _emoji_initializers = [];
    let _emoji_extraInitializers = [];
    let _image_decorators;
    let _image_initializers = [];
    let _image_extraInitializers = [];
    let _id_number_decorators;
    let _id_number_initializers = [];
    let _id_number_extraInitializers = [];
    let _passport_number_decorators;
    let _passport_number_initializers = [];
    let _passport_number_extraInitializers = [];
    let _interests_decorators;
    let _interests_initializers = [];
    let _interests_extraInitializers = [];
    let _mother_id_decorators;
    let _mother_id_initializers = [];
    let _mother_id_extraInitializers = [];
    let _father_id_decorators;
    let _father_id_initializers = [];
    let _father_id_extraInitializers = [];
    let _children_decorators;
    let _children_initializers = [];
    let _children_extraInitializers = [];
    let _address_decorators;
    let _address_initializers = [];
    let _address_extraInitializers = [];
    let _documents_decorators;
    let _documents_initializers = [];
    let _documents_extraInitializers = [];
    let _businesses_decorators;
    let _businesses_initializers = [];
    let _businesses_extraInitializers = [];
    return _a = class PersonDto {
            constructor() {
                this.name = __runInitializers(this, _name_initializers, void 0);
                this.gender = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _gender_initializers, void 0));
                this.type = (__runInitializers(this, _gender_extraInitializers), __runInitializers(this, _type_initializers, void 0));
                this.age = (__runInitializers(this, _type_extraInitializers), __runInitializers(this, _age_initializers, void 0));
                this.emoji = (__runInitializers(this, _age_extraInitializers), __runInitializers(this, _emoji_initializers, void 0));
                this.image = (__runInitializers(this, _emoji_extraInitializers), __runInitializers(this, _image_initializers, void 0));
                this.id_number = (__runInitializers(this, _image_extraInitializers), __runInitializers(this, _id_number_initializers, void 0));
                this.passport_number = (__runInitializers(this, _id_number_extraInitializers), __runInitializers(this, _passport_number_initializers, void 0));
                this.interests = (__runInitializers(this, _passport_number_extraInitializers), __runInitializers(this, _interests_initializers, void 0));
                this.mother_id = (__runInitializers(this, _interests_extraInitializers), __runInitializers(this, _mother_id_initializers, void 0));
                this.father_id = (__runInitializers(this, _mother_id_extraInitializers), __runInitializers(this, _father_id_initializers, void 0));
                this.children = (__runInitializers(this, _father_id_extraInitializers), __runInitializers(this, _children_initializers, void 0));
                this.address = (__runInitializers(this, _children_extraInitializers), __runInitializers(this, _address_initializers, void 0));
                this.documents = (__runInitializers(this, _address_extraInitializers), __runInitializers(this, _documents_initializers, void 0));
                this.businesses = (__runInitializers(this, _documents_extraInitializers), __runInitializers(this, _businesses_initializers, void 0));
                __runInitializers(this, _businesses_extraInitializers);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _name_decorators = [ApiProperty()];
            _gender_decorators = [ApiProperty()];
            _type_decorators = [ApiProperty()];
            _age_decorators = [ApiProperty()];
            _emoji_decorators = [ApiProperty()];
            _image_decorators = [ApiProperty()];
            _id_number_decorators = [ApiProperty()];
            _passport_number_decorators = [ApiProperty()];
            _interests_decorators = [ApiProperty({ type: [String] })];
            _mother_id_decorators = [ApiPropertyOptional()];
            _father_id_decorators = [ApiPropertyOptional()];
            _children_decorators = [ApiPropertyOptional()];
            _address_decorators = [ApiPropertyOptional({ type: AddressDto })];
            _documents_decorators = [ApiPropertyOptional({ type: [DocumentItemDto] })];
            _businesses_decorators = [ApiPropertyOptional({ type: [BusinessDto], description: 'Optional list of businesses' })];
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: obj => "name" in obj, get: obj => obj.name, set: (obj, value) => { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _gender_decorators, { kind: "field", name: "gender", static: false, private: false, access: { has: obj => "gender" in obj, get: obj => obj.gender, set: (obj, value) => { obj.gender = value; } }, metadata: _metadata }, _gender_initializers, _gender_extraInitializers);
            __esDecorate(null, null, _type_decorators, { kind: "field", name: "type", static: false, private: false, access: { has: obj => "type" in obj, get: obj => obj.type, set: (obj, value) => { obj.type = value; } }, metadata: _metadata }, _type_initializers, _type_extraInitializers);
            __esDecorate(null, null, _age_decorators, { kind: "field", name: "age", static: false, private: false, access: { has: obj => "age" in obj, get: obj => obj.age, set: (obj, value) => { obj.age = value; } }, metadata: _metadata }, _age_initializers, _age_extraInitializers);
            __esDecorate(null, null, _emoji_decorators, { kind: "field", name: "emoji", static: false, private: false, access: { has: obj => "emoji" in obj, get: obj => obj.emoji, set: (obj, value) => { obj.emoji = value; } }, metadata: _metadata }, _emoji_initializers, _emoji_extraInitializers);
            __esDecorate(null, null, _image_decorators, { kind: "field", name: "image", static: false, private: false, access: { has: obj => "image" in obj, get: obj => obj.image, set: (obj, value) => { obj.image = value; } }, metadata: _metadata }, _image_initializers, _image_extraInitializers);
            __esDecorate(null, null, _id_number_decorators, { kind: "field", name: "id_number", static: false, private: false, access: { has: obj => "id_number" in obj, get: obj => obj.id_number, set: (obj, value) => { obj.id_number = value; } }, metadata: _metadata }, _id_number_initializers, _id_number_extraInitializers);
            __esDecorate(null, null, _passport_number_decorators, { kind: "field", name: "passport_number", static: false, private: false, access: { has: obj => "passport_number" in obj, get: obj => obj.passport_number, set: (obj, value) => { obj.passport_number = value; } }, metadata: _metadata }, _passport_number_initializers, _passport_number_extraInitializers);
            __esDecorate(null, null, _interests_decorators, { kind: "field", name: "interests", static: false, private: false, access: { has: obj => "interests" in obj, get: obj => obj.interests, set: (obj, value) => { obj.interests = value; } }, metadata: _metadata }, _interests_initializers, _interests_extraInitializers);
            __esDecorate(null, null, _mother_id_decorators, { kind: "field", name: "mother_id", static: false, private: false, access: { has: obj => "mother_id" in obj, get: obj => obj.mother_id, set: (obj, value) => { obj.mother_id = value; } }, metadata: _metadata }, _mother_id_initializers, _mother_id_extraInitializers);
            __esDecorate(null, null, _father_id_decorators, { kind: "field", name: "father_id", static: false, private: false, access: { has: obj => "father_id" in obj, get: obj => obj.father_id, set: (obj, value) => { obj.father_id = value; } }, metadata: _metadata }, _father_id_initializers, _father_id_extraInitializers);
            __esDecorate(null, null, _children_decorators, { kind: "field", name: "children", static: false, private: false, access: { has: obj => "children" in obj, get: obj => obj.children, set: (obj, value) => { obj.children = value; } }, metadata: _metadata }, _children_initializers, _children_extraInitializers);
            __esDecorate(null, null, _address_decorators, { kind: "field", name: "address", static: false, private: false, access: { has: obj => "address" in obj, get: obj => obj.address, set: (obj, value) => { obj.address = value; } }, metadata: _metadata }, _address_initializers, _address_extraInitializers);
            __esDecorate(null, null, _documents_decorators, { kind: "field", name: "documents", static: false, private: false, access: { has: obj => "documents" in obj, get: obj => obj.documents, set: (obj, value) => { obj.documents = value; } }, metadata: _metadata }, _documents_initializers, _documents_extraInitializers);
            __esDecorate(null, null, _businesses_decorators, { kind: "field", name: "businesses", static: false, private: false, access: { has: obj => "businesses" in obj, get: obj => obj.businesses, set: (obj, value) => { obj.businesses = value; } }, metadata: _metadata }, _businesses_initializers, _businesses_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
export { PersonDto };
