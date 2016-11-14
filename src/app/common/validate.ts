export class Validate {
    public static checkMark(mark: number): boolean {
        if (mark <= 10 && mark >= 0) {
            return true;
        }
        return false;
    }
}