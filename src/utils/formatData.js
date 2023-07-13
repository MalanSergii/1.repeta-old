import { format } from "date-fns";
// import { ru } from "date-fns/locale";

export function dateFormat(start) {
    return format(
        new Date(start),
        "dd MMMM yyyy, HH:mm"
        // { locale: ru }
    );
}
