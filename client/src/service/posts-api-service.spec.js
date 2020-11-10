import axios from "axios";

import PostsAPIService from "./posts-api-service";

jest.mock("axios");

describe("PostsAPIService", () => {
    const postsAPIService = new PostsAPIService();

    describe("getAllPosts method", () => {
        afterEach(() => {
            axios.mockReset();
        });

        it("should return all posts", async () => {
            const data = [
                {
                    id: 1,
                    title: "Title 1",
                    description: "Lorem ipsum"
                },
                {
                    id: 2,
                    title: "Title 2",
                    description: "Lorem ipsum"
                }
            ];

            axios.mockImplementation(() => Promise.resolve(data));

            await expect(postsAPIService.getAllPosts()).resolves.toEqual(data);
            expect(axios).toHaveBeenCalledTimes(1);
            expect(axios).toHaveBeenCalledWith({
                method: "get",
                url: "/api/posts/"
            });
        });

        it("should return error", async () => {
            const errorMessage = "Error";

            axios.mockImplementation(() => Promise.reject(new Error(errorMessage)));

            await expect(postsAPIService.getAllPosts()).rejects.toThrow(errorMessage);
            expect(axios).toHaveBeenCalledTimes(1);
        });
    });

    describe("getPostById method", () => {
        afterEach(() => {
            axios.mockReset();
        });

        it("should return post by id", async () => {
            const data = {
                id: 1,
                title: "Title 1",
                description: "Lorem ipsum"
            };

            axios.mockImplementation(() => Promise.resolve(data));

            await expect(postsAPIService.getPostById(1)).resolves.toEqual(data);
            expect(axios).toHaveBeenCalledTimes(1);
            expect(axios).toHaveBeenCalledWith({
                method: "get",
                url: "/api/posts/1"
            });
        });

        it("should return error", async () => {
            const errorMessage = "Error";

            axios.mockImplementation(() => Promise.reject(new Error(errorMessage)));

            await expect(postsAPIService.getPostById()).rejects.toThrow(errorMessage);
            expect(axios).toHaveBeenCalledTimes(1);
        });
    });

    describe("postPost method", () => {
        let cb;

        const data = {
            id: 1,
            title: "Title 1",
            description: "Lorem ipsum"
        };

        const cases = [
            [10, 20],
            [20, 40],
            [30, 60],
            [45, 90],
            [60, 120],
            [70, 140],
            [85, 170],
            [100, 200],
        ];

        let countCb = 0;

        beforeAll(() => {
            cb = jest.fn();
        });

        afterEach(() => {
            axios.mockReset();
        });

        it.each(cases)(
            "should show progress about getting precent %p from loaded %p and total 200",
            async (precent, loaded) => {
                axios.mockImplementation((args) => {
                    args.onUploadProgress({ loaded, total: 200 });
                    return Promise.resolve(args.data);
                });

                const result = await postsAPIService.postPost(data, cb);

                countCb += 1;

                expect(result).toEqual(data);
                expect(cb).toHaveBeenCalledWith(precent);
                expect(cb).toHaveBeenCalledTimes(countCb);
            }
        );

        it("should load data and return post", async () => {
            axios.mockImplementation((args) => Promise.resolve(args.data));

            const result = await postsAPIService.postPost(data, cb);

            expect(result).toEqual(data);
            expect(axios).toHaveBeenCalledTimes(1);
        });
    });
});