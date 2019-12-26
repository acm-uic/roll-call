export interface Events {
    accessRole?: string | null;
    defaultReminders?: EventReminder[];
    description?: string | null;
    etag?: string | null;
    items?: Event[];
    kind?: string | null;
    nextPageToken?: string | null;
    nextSyncToken?: string | null;
    summary?: string | null;
    timeZone?: string | null;
    updated?: string | null;
}
export interface EventReminder {
    method?: string | null;
    minutes?: number | null;
}
export interface EventAttendee {
    additionalGuests?: number | null;
    comment?: string | null;
    displayName?: string | null;
    email?: string | null;
    id?: string | null;
    optional?: boolean | null;
    organizer?: boolean | null;
    resource?: boolean | null;
    responseStatus?: string | null;
    self?: boolean | null;
}
export interface EventAttachment {
    fileId?: string | null;
    fileUrl?: string | null;
    iconLink?: string | null;
    mimeType?: string | null;
    title?: string | null;
}
export interface ConferenceData {
    conferenceId?: string | null;
    conferenceSolution?: ConferenceSolution;
    createRequest?: CreateConferenceRequest;
    entryPoints?: EntryPoint[];
    notes?: string | null;
    parameters?: ConferenceParameters;
    signature?: string | null;
}
export interface CreateConferenceRequest {
    conferenceSolutionKey?: ConferenceSolutionKey;
    requestId?: string | null;
    status?: ConferenceRequestStatus;
}
export interface ConferenceRequestStatus {
    statusCode?: string | null;
}
export interface EntryPoint {
    accessCode?: string | null;
    entryPointFeatures?: string[] | null;
    entryPointType?: string | null;
    label?: string | null;
    meetingCode?: string | null;
    passcode?: string | null;
    password?: string | null;
    pin?: string | null;
    regionCode?: string | null;
    uri?: string | null;
}
export interface ConferenceParameters {
    addOnParameters?: ConferenceParametersAddOnParameters;
}
export interface ConferenceParametersAddOnParameters {
    parameters?: {
        [key: string]: string;
    } | null;
}
export interface ConferenceSolution {
    iconUri?: string | null;
    key?: ConferenceSolutionKey;
    name?: string | null;
}
export interface ConferenceSolutionKey {
    type?: string | null;
}
export interface EventDateTime {
    date?: string | null;
    dateTime?: string | null;
    timeZone?: string | null;
}
export interface Event {
    anyoneCanAddSelf?: boolean | null;
    attachments?: EventAttachment[];
    attendees?: EventAttendee[];
    attendeesOmitted?: boolean | null;
    colorId?: string | null;
    conferenceData?: ConferenceData;
    created?: string | null;
    creator?: {
        displayName?: string;
        email?: string;
        id?: string;
        self?: boolean;
    } | null;
    description?: string | null;
    end?: EventDateTime;
    endTimeUnspecified?: boolean | null;
    etag?: string | null;
    extendedProperties?: {
        private?: {
            [key: string]: string;
        };
        shared?: {
            [key: string]: string;
        };
    } | null;
    gadget?: {
        display?: string;
        height?: number;
        iconLink?: string;
        link?: string;
        preferences?: {
            [key: string]: string;
        };
        title?: string;
        type?: string;
        width?: number;
    } | null;
    guestsCanInviteOthers?: boolean | null;
    guestsCanModify?: boolean | null;
    guestsCanSeeOtherGuests?: boolean | null;
    hangoutLink?: string | null;
    htmlLink?: string | null;
    iCalUID?: string | null;
    id?: string | null;
    kind?: string | null;
    location?: string | null;
    locked?: boolean | null;
    organizer?: {
        displayName?: string;
        email?: string;
        id?: string;
        self?: boolean;
    } | null;
    originalStartTime?: EventDateTime;
    privateCopy?: boolean | null;
    recurrence?: string[] | null;
    recurringEventId?: string | null;
    reminders?: {
        overrides?: EventReminder[];
        useDefault?: boolean;
    } | null;
    sequence?: number | null;
    source?: {
        title?: string;
        url?: string;
    } | null;
    start?: EventDateTime;
    status?: string | null;
    summary?: string | null;
    transparency?: string | null;
    updated?: string | null;
    visibility?: string | null;
}