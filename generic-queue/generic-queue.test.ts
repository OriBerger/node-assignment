import { describe, expect, it } from "vitest";
import { Queue } from "./generic-queue";

describe("Queue", () => {
  it("handles numbers correctly", () => {
    const numberQueue = new Queue<number>();
    numberQueue.enqueue(1);
    numberQueue.enqueue(2);

    expect(numberQueue.dequeue()).toBe(1);
    expect(numberQueue.peek()).toBe(2);
    expect(numberQueue.dequeue()).toBe(2);
    expect(numberQueue.isEmpty()).toBe(true);
    expect(numberQueue.dequeue()).toBeUndefined();
    expect(numberQueue.toArray()).toEqual([]);
  });

  it("handles strings correctly", () => {
    const stringQueue = new Queue<string>();
    stringQueue.enqueue("a");
    stringQueue.enqueue("b");

    expect(stringQueue.dequeue()).toBe("a");
    expect(stringQueue.peek()).toBe("b");
    expect(stringQueue.size()).toBe(1);
    expect(stringQueue.toArray()).toEqual(["b"]);
  });

  it("handles mixed types (string | number)", () => {
    const mixedQueue = new Queue<string | number>();
    mixedQueue.enqueue(1);
    mixedQueue.enqueue("hello");

    expect(mixedQueue.dequeue()).toBe(1);
    expect(mixedQueue.peek()).toBe("hello");
    expect(mixedQueue.size()).toBe(1);
    expect(mixedQueue.toArray()).toEqual(["hello"]);

    mixedQueue.clear();
    expect(mixedQueue.toArray()).toEqual([]);
  });

  it("supports checking size and isEmpty together", () => {
    const q = new Queue<number>();
    expect(q.isEmpty()).toBe(true);
    expect(q.size()).toBe(0);

    q.enqueue(5);
    q.enqueue(10);

    expect(q.size()).toBe(2);
    expect(q.isEmpty()).toBe(false);

    q.dequeue();
    q.dequeue();

    expect(q.isEmpty()).toBe(true);
  });
});
