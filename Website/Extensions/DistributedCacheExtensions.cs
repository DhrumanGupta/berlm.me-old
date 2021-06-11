using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Caching.Distributed;
using Newtonsoft.Json;

namespace Website.Extensions
{
    public static class DistributedCacheExtensions
    {
        /// <summary>
        /// Sets a record in a distributed cache
        /// </summary>
        /// <param name="cache">The distributed cache to set the record in</param>
        /// <param name="recordId">The key to save the record by</param>
        /// <param name="record">The record to store in the cache</param>
        /// <param name="absoluteExpireTime">The time after the record being set, in which the record's cache will expire</param>
        /// <param name="unusedExpireTime">The time after the last record access, in which the record's cache will expire</param>
        public static async Task SetRecordAsync<T>(this IDistributedCache cache,
            string recordId,
            T record,
            TimeSpan? absoluteExpireTime = null,
            TimeSpan? unusedExpireTime = null)
        {
            var options = new DistributedCacheEntryOptions
            {
                AbsoluteExpirationRelativeToNow = absoluteExpireTime ?? TimeSpan.FromSeconds(10),
                SlidingExpiration = unusedExpireTime
            };

            var jsonData = JsonConvert.SerializeObject(record);
            await cache.SetStringAsync(recordId, jsonData, options);
        }

        /// <summary>
        /// Gets a record in a distributed cache
        /// </summary>
        /// <param name="cache">The distributed cache to set the record in</param>
        /// <param name="recordId">The key to get the record by</param>
        /// <returns>The record found in the cache. Returns default if not found</returns>
        public static async Task<T> GetRecordAsync<T>(this IDistributedCache cache, string recordId)
        {
            var jsonData = await cache.GetStringAsync(recordId);
            return string.IsNullOrEmpty(jsonData) ? default : JsonConvert.DeserializeObject<T>(jsonData);
        }
    }
}