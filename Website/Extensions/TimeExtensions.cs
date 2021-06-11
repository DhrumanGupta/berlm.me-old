using System;

namespace Website.Extensions
{
    public static class TimeExtensions
    {
        public static DateTime RoundDown(this DateTime time)
        {
            return time.AddMinutes(
                time.Minute > 30 ? -(time.Minute - 30) : -time.Minute);
        }
    }
}