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
// src/person/dto/document-item.dto.ts
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
let DocumentItemDto = (() => {
    var _a;
    let _type_decorators;
    let _type_initializers = [];
    let _type_extraInitializers = [];
    let _description_decorators;
    let _description_initializers = [];
    let _description_extraInitializers = [];
    let _hospitalName_decorators;
    let _hospitalName_initializers = [];
    let _hospitalName_extraInitializers = [];
    let _admissionDate_decorators;
    let _admissionDate_initializers = [];
    let _admissionDate_extraInitializers = [];
    let _dischargeDate_decorators;
    let _dischargeDate_initializers = [];
    let _dischargeDate_extraInitializers = [];
    let _docName_decorators;
    let _docName_initializers = [];
    let _docName_extraInitializers = [];
    let _issuedDate_decorators;
    let _issuedDate_initializers = [];
    let _issuedDate_extraInitializers = [];
    let _certificateName_decorators;
    let _certificateName_initializers = [];
    let _certificateName_extraInitializers = [];
    let _certificateIssuer_decorators;
    let _certificateIssuer_initializers = [];
    let _certificateIssuer_extraInitializers = [];
    let _validUntil_decorators;
    let _validUntil_initializers = [];
    let _validUntil_extraInitializers = [];
    let _businessName_decorators;
    let _businessName_initializers = [];
    let _businessName_extraInitializers = [];
    let _businessType_decorators;
    let _businessType_initializers = [];
    let _businessType_extraInitializers = [];
    let _registrationNumber_decorators;
    let _registrationNumber_initializers = [];
    let _registrationNumber_extraInitializers = [];
    let _files_decorators;
    let _files_initializers = [];
    let _files_extraInitializers = [];
    return _a = class DocumentItemDto {
            constructor() {
                this.type = __runInitializers(this, _type_initializers, void 0);
                this.description = (__runInitializers(this, _type_extraInitializers), __runInitializers(this, _description_initializers, void 0));
                // hospitalDoc props
                this.hospitalName = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _hospitalName_initializers, void 0));
                this.admissionDate = (__runInitializers(this, _hospitalName_extraInitializers), __runInitializers(this, _admissionDate_initializers, void 0));
                this.dischargeDate = (__runInitializers(this, _admissionDate_extraInitializers), __runInitializers(this, _dischargeDate_initializers, void 0));
                // generalDoc props
                this.docName = (__runInitializers(this, _dischargeDate_extraInitializers), __runInitializers(this, _docName_initializers, void 0));
                this.issuedDate = (__runInitializers(this, _docName_extraInitializers), __runInitializers(this, _issuedDate_initializers, void 0));
                // certificate props
                this.certificateName = (__runInitializers(this, _issuedDate_extraInitializers), __runInitializers(this, _certificateName_initializers, void 0));
                this.certificateIssuer = (__runInitializers(this, _certificateName_extraInitializers), __runInitializers(this, _certificateIssuer_initializers, void 0));
                this.validUntil = (__runInitializers(this, _certificateIssuer_extraInitializers), __runInitializers(this, _validUntil_initializers, void 0));
                // business props
                this.businessName = (__runInitializers(this, _validUntil_extraInitializers), __runInitializers(this, _businessName_initializers, void 0));
                this.businessType = (__runInitializers(this, _businessName_extraInitializers), __runInitializers(this, _businessType_initializers, void 0));
                this.registrationNumber = (__runInitializers(this, _businessType_extraInitializers), __runInitializers(this, _registrationNumber_initializers, void 0));
                this.files = (__runInitializers(this, _registrationNumber_extraInitializers), __runInitializers(this, _files_initializers, void 0));
                __runInitializers(this, _files_extraInitializers);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _type_decorators = [ApiProperty({ enum: ['hospitalDoc', 'generalDoc', 'certificate', 'business'], description: 'Type of document' })];
            _description_decorators = [ApiProperty({ description: 'Description of the document' })];
            _hospitalName_decorators = [ApiPropertyOptional()];
            _admissionDate_decorators = [ApiPropertyOptional()];
            _dischargeDate_decorators = [ApiPropertyOptional()];
            _docName_decorators = [ApiPropertyOptional()];
            _issuedDate_decorators = [ApiPropertyOptional()];
            _certificateName_decorators = [ApiPropertyOptional()];
            _certificateIssuer_decorators = [ApiPropertyOptional()];
            _validUntil_decorators = [ApiPropertyOptional()];
            _businessName_decorators = [ApiPropertyOptional()];
            _businessType_decorators = [ApiPropertyOptional()];
            _registrationNumber_decorators = [ApiPropertyOptional()];
            _files_decorators = [ApiPropertyOptional({
                    description: 'List of file URLs or paths related to the document',
                    type: [String],
                })];
            __esDecorate(null, null, _type_decorators, { kind: "field", name: "type", static: false, private: false, access: { has: obj => "type" in obj, get: obj => obj.type, set: (obj, value) => { obj.type = value; } }, metadata: _metadata }, _type_initializers, _type_extraInitializers);
            __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: obj => "description" in obj, get: obj => obj.description, set: (obj, value) => { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
            __esDecorate(null, null, _hospitalName_decorators, { kind: "field", name: "hospitalName", static: false, private: false, access: { has: obj => "hospitalName" in obj, get: obj => obj.hospitalName, set: (obj, value) => { obj.hospitalName = value; } }, metadata: _metadata }, _hospitalName_initializers, _hospitalName_extraInitializers);
            __esDecorate(null, null, _admissionDate_decorators, { kind: "field", name: "admissionDate", static: false, private: false, access: { has: obj => "admissionDate" in obj, get: obj => obj.admissionDate, set: (obj, value) => { obj.admissionDate = value; } }, metadata: _metadata }, _admissionDate_initializers, _admissionDate_extraInitializers);
            __esDecorate(null, null, _dischargeDate_decorators, { kind: "field", name: "dischargeDate", static: false, private: false, access: { has: obj => "dischargeDate" in obj, get: obj => obj.dischargeDate, set: (obj, value) => { obj.dischargeDate = value; } }, metadata: _metadata }, _dischargeDate_initializers, _dischargeDate_extraInitializers);
            __esDecorate(null, null, _docName_decorators, { kind: "field", name: "docName", static: false, private: false, access: { has: obj => "docName" in obj, get: obj => obj.docName, set: (obj, value) => { obj.docName = value; } }, metadata: _metadata }, _docName_initializers, _docName_extraInitializers);
            __esDecorate(null, null, _issuedDate_decorators, { kind: "field", name: "issuedDate", static: false, private: false, access: { has: obj => "issuedDate" in obj, get: obj => obj.issuedDate, set: (obj, value) => { obj.issuedDate = value; } }, metadata: _metadata }, _issuedDate_initializers, _issuedDate_extraInitializers);
            __esDecorate(null, null, _certificateName_decorators, { kind: "field", name: "certificateName", static: false, private: false, access: { has: obj => "certificateName" in obj, get: obj => obj.certificateName, set: (obj, value) => { obj.certificateName = value; } }, metadata: _metadata }, _certificateName_initializers, _certificateName_extraInitializers);
            __esDecorate(null, null, _certificateIssuer_decorators, { kind: "field", name: "certificateIssuer", static: false, private: false, access: { has: obj => "certificateIssuer" in obj, get: obj => obj.certificateIssuer, set: (obj, value) => { obj.certificateIssuer = value; } }, metadata: _metadata }, _certificateIssuer_initializers, _certificateIssuer_extraInitializers);
            __esDecorate(null, null, _validUntil_decorators, { kind: "field", name: "validUntil", static: false, private: false, access: { has: obj => "validUntil" in obj, get: obj => obj.validUntil, set: (obj, value) => { obj.validUntil = value; } }, metadata: _metadata }, _validUntil_initializers, _validUntil_extraInitializers);
            __esDecorate(null, null, _businessName_decorators, { kind: "field", name: "businessName", static: false, private: false, access: { has: obj => "businessName" in obj, get: obj => obj.businessName, set: (obj, value) => { obj.businessName = value; } }, metadata: _metadata }, _businessName_initializers, _businessName_extraInitializers);
            __esDecorate(null, null, _businessType_decorators, { kind: "field", name: "businessType", static: false, private: false, access: { has: obj => "businessType" in obj, get: obj => obj.businessType, set: (obj, value) => { obj.businessType = value; } }, metadata: _metadata }, _businessType_initializers, _businessType_extraInitializers);
            __esDecorate(null, null, _registrationNumber_decorators, { kind: "field", name: "registrationNumber", static: false, private: false, access: { has: obj => "registrationNumber" in obj, get: obj => obj.registrationNumber, set: (obj, value) => { obj.registrationNumber = value; } }, metadata: _metadata }, _registrationNumber_initializers, _registrationNumber_extraInitializers);
            __esDecorate(null, null, _files_decorators, { kind: "field", name: "files", static: false, private: false, access: { has: obj => "files" in obj, get: obj => obj.files, set: (obj, value) => { obj.files = value; } }, metadata: _metadata }, _files_initializers, _files_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
export { DocumentItemDto };
