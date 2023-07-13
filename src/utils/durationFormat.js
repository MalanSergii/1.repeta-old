import { formatDistanceStrict } from "date-fns";

export function durationFormat(start, end) {
    return formatDistanceStrict(new Date(start), new Date(end));
}
