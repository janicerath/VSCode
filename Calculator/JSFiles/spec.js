"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('Calculator', function () {
    it('Add', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
            protractor_1.browser.manage().window().maximize();
            protractor_1.browser.sleep(3000);
            protractor_1.element(protractor_1.by.model('first')).sendKeys(4);
            protractor_1.element(protractor_1.by.model('second')).sendKeys(5);
            protractor_1.element
                .all(protractor_1.by.options('value for (key, value) in operators'))
                .then(function (opts) {
                opts[0].click();
            });
            protractor_1.element(protractor_1.by.id('gobutton')).click();
            let result = yield protractor_1.element(protractor_1.by.binding('latest')).getText();
            console.log(result);
            expect(result).toBe('9');
        });
    });
    it('Subtract', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.element(protractor_1.by.model('first')).sendKeys(20);
            protractor_1.element(protractor_1.by.model('second')).sendKeys(5);
            protractor_1.element
                .all(protractor_1.by.options('value for (key, value) in operators'))
                .then(function (opts) {
                opts[4].click();
            });
            protractor_1.element(protractor_1.by.id('gobutton')).click();
            let result = yield protractor_1.element(protractor_1.by.binding('latest')).getText();
            console.log(result);
            expect(result).toBe('15');
        });
    });
    it('Mulitply', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.element(protractor_1.by.model('first')).sendKeys(6);
            protractor_1.element(protractor_1.by.model('second')).sendKeys(7);
            protractor_1.element.all(protractor_1.by.options('value for (key, value) in operators')).then(function (opts) {
                opts[3].click();
            });
            protractor_1.element(protractor_1.by.id('gobutton')).click();
            let result = yield protractor_1.element(protractor_1.by.binding('latest')).getText();
            console.log(result);
            expect(result).toBe('42');
        });
    });
    it('Divide', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.element(protractor_1.by.model('first')).sendKeys(100);
            protractor_1.element(protractor_1.by.model('second')).sendKeys(5);
            protractor_1.element
                .all(protractor_1.by.options('value for (key, value) in operators'))
                .then(function (opts) {
                opts[1].click();
            });
            protractor_1.element(protractor_1.by.id('gobutton')).click();
            let result = yield protractor_1.element(protractor_1.by.binding('latest')).getText();
            console.log(result);
            expect(result).toBe('20');
        });
    });
    it('Remainder', function () {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.element(protractor_1.by.model('first')).sendKeys(41);
            protractor_1.element(protractor_1.by.model('second')).sendKeys(3);
            protractor_1.element.all(protractor_1.by.options('value for (key, value) in operators')).then(function (opts) {
                opts[2].click();
            });
            protractor_1.element(protractor_1.by.id('gobutton')).click();
            let result = yield protractor_1.element(protractor_1.by.binding('latest')).getText();
            console.log(result);
            expect(result).toBe('2');
            protractor_1.browser.sleep(3000);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFrRDtBQUVsRCxRQUFRLENBQUMsWUFBWSxFQUFFO0lBQ3JCLEVBQUUsQ0FBQyxLQUFLLEVBQUU7O1lBQ1Isb0JBQU8sQ0FBQyxHQUFHLENBQUMsMERBQTBELENBQUMsQ0FBQztZQUN4RSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3JDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXBCLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsb0JBQU87aUJBQ04sR0FBRyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMscUNBQXFDLENBQUMsQ0FBQztpQkFDdEQsSUFBSSxDQUFDLFVBQVMsSUFBSTtnQkFDakIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFbkMsSUFBSSxNQUFNLEdBQVksTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXBCLE1BQU0sQ0FBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsQ0FBQztLQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxVQUFVLEVBQUU7O1lBQ2Isb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3hDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxvQkFBTztpQkFDTixHQUFHLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO2lCQUN0RCxJQUFJLENBQUMsVUFBUyxJQUFJO2dCQUNqQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDbEIsQ0FBQyxDQUFDLENBQUM7WUFDSCxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUVuQyxJQUFJLE1BQU0sR0FBWSxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3BFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFcEIsTUFBTSxDQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU3QixDQUFDO0tBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLFVBQVUsRUFBRTs7WUFDYixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMscUNBQXFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7Z0JBQy9FLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQztZQUNILG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRW5DLElBQUksTUFBTSxHQUFZLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDcEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVwQixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLENBQUM7S0FBQSxDQUFDLENBQUM7SUFHSCxFQUFFLENBQUMsUUFBUSxFQUFFOztZQUNYLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6QyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsb0JBQU87aUJBQ04sR0FBRyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMscUNBQXFDLENBQUMsQ0FBQztpQkFDdEQsSUFBSSxDQUFDLFVBQVMsSUFBSTtnQkFDakIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFbkMsSUFBSSxNQUFNLEdBQVksTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFHNUIsQ0FBQztLQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxXQUFXLEVBQUM7O1lBQ2Isb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3hDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLHFDQUFxQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO2dCQUMvRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDbEIsQ0FBQyxDQUFDLENBQUM7WUFDSCxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUVuQyxJQUFJLE1BQU0sR0FBWSxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3BFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUV6QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUd0QixDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBRUwsQ0FBQyxDQUFDLENBQUMifQ==