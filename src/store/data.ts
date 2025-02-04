import { InitialDataType } from "@/types/data";

export const dashboardData: InitialDataType = {
    users: {
        active: 19000,
        inactive: 1000,
        total: 20000
    },
    revenue: {
        subscriptions: 65000,
        advertisements: 35000,
        onetime: 15000
    },
    streams: {
        total: "1.2M",
        topArtist: "Taylor Swift"
    },
    recentStreams: [
        {
            userId: "USR001",
            songName: "Anti-Hero",
            artist: "Taylor Swift",
            dateStreamed: "2024-01-15",
            streamCount: 1250
        },
        {
            userId: "USR002",
            songName: "Cruel Summer",
            artist: "Taylor Swift",
            dateStreamed: "2024-01-14",
            streamCount: 980
        },
        {
            userId: "USR003",
            songName: "Flowers",
            artist: "Miley Cyrus",
            dateStreamed: "2024-01-15", 
            streamCount: 875
        },
        {
            userId: "USR004",
            songName: "Vampire",
            artist: "Olivia Rodrigo",
            dateStreamed: "2024-01-13",
            streamCount: 750
        },
        {
            userId: "USR005", 
            songName: "Last Night",
            artist: "Morgan Wallen",
            dateStreamed: "2024-01-15",
            streamCount: 690
        },
        {
            userId: "USR006",
            songName: "Karma",
            artist: "Taylor Swift",
            dateStreamed: "2024-01-14",
            streamCount: 645
        },
        {
            userId: "USR007",
            songName: "Rich Flex",
            artist: "Drake",
            dateStreamed: "2024-01-15",
            streamCount: 612
        },
        {
            userId: "USR008",
            songName: "As It Was",
            artist: "Harry Styles",
            dateStreamed: "2024-01-13",
            streamCount: 589
        },
        {
            userId: "USR009",
            songName: "About Damn Time",
            artist: "Lizzo",
            dateStreamed: "2024-01-15",
            streamCount: 534
        },
        {
            userId: "USR010",
            songName: "Bad Habit",
            artist: "Steve Lacy",
            dateStreamed: "2024-01-14",
            streamCount: 498
        }
    ],
    userGrowth: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [100, 150, 200, 250, 300, 450, 600, 750, 900, 1200, 1500, 2000]
    },

    topSongs: {
        labels: ["Anti-Hero", "Cruel Summer", "Flowers", "Vampire", "Last Night"],
        data: [1250000, 980000, 875000, 750000, 690000]
    }
}; 