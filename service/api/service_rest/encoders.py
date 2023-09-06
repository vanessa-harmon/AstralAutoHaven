from common.json import ModelEncoder
from .models import AutomobileVO

class AutomobileVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin", "sold"]
