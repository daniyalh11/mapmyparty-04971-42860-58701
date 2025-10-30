import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Calendar, DollarSign } from "lucide-react";

const PromoterTopPerformers = () => {
  const topEvents = [
    {
      id: "1",
      title: "Summer Music Festival 2024",
      organizer: "ABC Events",
      ticketsSold: 4850,
      revenue: 285000,
      rank: 1,
    },
    {
      id: "2",
      title: "Food & Wine Festival",
      organizer: "Culinary Dreams",
      ticketsSold: 3200,
      revenue: 224000,
      rank: 2,
    },
    {
      id: "3",
      title: "Tech Innovation Conference",
      organizer: "TechCorp",
      ticketsSold: 1850,
      revenue: 199600,
      rank: 3,
    },
  ];

  const topOrganizers = [
    {
      id: "1",
      name: "ABC Events",
      totalEvents: 8,
      totalRevenue: 425000,
      rank: 1,
    },
    {
      id: "2",
      name: "Culinary Dreams",
      totalEvents: 5,
      totalRevenue: 345000,
      rank: 2,
    },
    {
      id: "3",
      name: "TechCorp",
      totalEvents: 6,
      totalRevenue: 298000,
      rank: 3,
    },
  ];

  const getRankColor = (rank: number) => {
    if (rank === 1) return "text-yellow-600";
    if (rank === 2) return "text-gray-600";
    if (rank === 3) return "text-amber-700";
    return "text-muted-foreground";
  };

  const getRankEmoji = (rank: number) => {
    if (rank === 1) return "🥇";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    return rank;
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Top Performing Events
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {topEvents.map((event) => (
            <div
              key={event.id}
              className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            >
              <div className={`text-3xl font-bold ${getRankColor(event.rank)}`}>
                {getRankEmoji(event.rank)}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-1">{event.title}</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  by {event.organizer}
                </p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    <span>{event.ticketsSold} tickets</span>
                  </div>
                  <div className="flex items-center gap-1 text-primary font-semibold">
                    <DollarSign className="w-3 h-3" />
                    <span>₹{event.revenue.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-accent" />
              Top Performing Organizers
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {topOrganizers.map((organizer) => (
            <div
              key={organizer.id}
              className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            >
              <div className={`text-3xl font-bold ${getRankColor(organizer.rank)}`}>
                {getRankEmoji(organizer.rank)}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-2">{organizer.name}</h4>
                <div className="flex flex-wrap gap-3 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{organizer.totalEvents} events</span>
                  </div>
                  <div className="flex items-center gap-1 text-primary font-semibold">
                    <DollarSign className="w-3 h-3" />
                    <span>₹{organizer.totalRevenue.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default PromoterTopPerformers;
