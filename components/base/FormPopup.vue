<script
  setup
  lang="ts">
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const props = defineProps({
  buttonClass: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button
        class="uppercase"
        :class="props.buttonClass">
        задать вопрос
      </Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px] w-[90%] bg-background p-8 rounded">
      <DialogHeader>
        <DialogTitle>Form</DialogTitle>
        <DialogDescription>Make changes to your profile here.</DialogDescription>
      </DialogHeader>
      <div class="grid gap-4 py-4">
        <div class="grid grid-cols-4 items-center gap-4">
          <Label
            for="name"
            class="text-right">
            Name
          </Label>
          <Input
            id="name"
            value=""
            class="col-span-3"/>
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <Label
            for="username"
            class="text-right">
            Username
          </Label>
          <Input
            id="username"
            value=""
            class="col-span-3"/>
        </div>
      </div>
      <DialogFooter>
        <Button type="submit">Save</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>