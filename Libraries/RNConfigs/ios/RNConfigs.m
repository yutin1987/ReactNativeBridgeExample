
#import "RNConfigs.h"

@implementation RNConfigs

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE()

- (NSDictionary *)constantsToExport
{
    return @{
             @"whoami": @"MozTW"
             };
}

RCT_REMAP_METHOD(showGuys,
                 name: (NSString *)name
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    NSArray *events = [NSArray arrayWithObjects: @"MozTW", @"MozXYZ", @"YuTin", name, nil];

    resolve(events);
}

@end
