import { colors, getRandomMinMax, getColorCover, getSizeImage } from "./utils";

describe("utils methods", () => {
    describe("getRandomMinMax method", () => {
        beforeAll(() => {
            jest.spyOn(global.Math, "random")
        });
    
        afterAll(() => {
            jest.spyOn(global.Math, "random").mockRestore();
        });
    
        const cases = [
            [0.12, 0],
            [0.12, 0],
            [0.18, 1],
            [0.19, 1],
            [0.32, 2],
            [0.54, 3],
            [0.46, 3],
            [0.64, 4],
            [0.62, 4],
            [0.91, 6],
            [0.78, 5]
        ];
    
        it.each(cases)(
            "get random %p and returns %p range from 0 to 6",
            (random, expectResult) => {
                Math.random.mockReturnValue(random);
    
                const result = getRandomMinMax(0, 6);
    
                expect(result).toBe(expectResult);
            }
        );
    });
    
    describe("getColorCover method", () => {
        it("should return colors from range array colors", () => {
            const result = getColorCover();
    
            expect(colors.includes(result)).toBeTruthy();
        });
    });
    
    describe("getSizeImage method", () => {
        let originalCreateObjectURL,
            originalRevokeObjectURL,
            originalImage;
    
        beforeAll(() => {    
            originalCreateObjectURL = global.URL.createObjectURL;
            originalRevokeObjectURL = global.URL.revokeObjectURL;
            originalImage           = global.Image;
            
            global.URL.createObjectURL = jest.fn();
            global.URL.revokeObjectURL = jest.fn();
        });
    
        afterAll(() => {               
            global.URL.createObjectURL = originalCreateObjectURL;
            global.URL.revokeObjectURL = originalRevokeObjectURL;
            global.Image               = originalImage;
        });
    
        it("should return width and height", async () => {
            URL.createObjectURL.mockImplementation(a => a);
    
            class Image{
                constructor(){
                    this.width  = 796;
                    this.height = 416;
                    this.src    = null;
                }
                addEventListener(type, fn) { fn.call(this) }
            }
    
            global.Image = Image;
    
            const size = await getSizeImage("image-stub");
    
            expect(URL.createObjectURL).toHaveBeenCalledTimes(1);
            expect(size).toEqual({ width: 796, height: 416 });
            expect(URL.revokeObjectURL).toHaveBeenCalledTimes(1);
        });
    });
});


