using System;

namespace Domain
{
    public class ActivityCategory
    {
        // EF Framework knows 'Id' is the primary key
        public int Id { get; set; }
        public string Text { get; set; }
        public string Value { get; set; }
    }
}